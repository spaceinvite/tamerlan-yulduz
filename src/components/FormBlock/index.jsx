import { useState } from 'react';

import styles from './FormBlock.module.scss';

import { Toast } from '../Toast';

const Input = ({ label, id, type, placeholder, value, onChange }) => {
	return (
		<div className={styles.input}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				name={id}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

const Presence = ({ presence, setPresence }) => {
	return (
		<div className={styles.presence}>
			<p className={styles.presence__text}>Планируете ли вы присутствовать?</p>

			<label className={styles.presence__label}>
				<input
					className={styles.presence__input}
					type='radio'
					name='presence'
					value='Да'
					checked={presence === 'Да'}
					onChange={e => setPresence(e.target.value)}
				/>
				<span className={styles.presence__radio}></span>
				<p className={styles.presence__text}>Да, с удовольствием!</p>
			</label>

			<label className={styles.presence__label}>
				<input
					className={styles.presence__input}
					type='radio'
					name='presence'
					value='Нет'
					checked={presence === 'Нет'}
					onChange={e => setPresence(e.target.value)}
				/>
				<span className={styles.presence__radio}></span>
				<p className={styles.presence__text}>К сожалению, не смогу</p>
			</label>
		</div>
	);
};

export const FormBlock = () => {
	const [guestName, setGuestName] = useState('');
	const [presence, setPresence] = useState('');
	const [toastMessage, setToastMessage] = useState('');
	const [showToast, setShowToast] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();

		if (!guestName || !presence) {
			setToastMessage('Пожалуйста, заполните все поля.');
			setShowToast(true);
			return;
		}

		const data = {
			name: guestName,
			presence: presence,
		};

		try {
			const response = await fetch(
				'https://script.google.com/macros/s/AKfycbxBIQmmdRCxrJmT38lpxKQm-lIo3AiyZ657mxtBvGFt27W4wQZ3R1dayc5FxwM8jbwW/exec',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					mode: 'no-cors',
					body: JSON.stringify(data),
				}
			);

			setToastMessage('Ваш ответ успешно отправлен!');
			setShowToast(true);
			setPresence('');
			setGuestName('');
		} catch (error) {
			setToastMessage('Произошла ошибка: ' + error.message);
			setShowToast(true);
		}
	};

	return (
		<div
			className={styles.block}
			data-aos='zoom-in'
			data-aos-duration='2000'
			data-aos-once='true'
		>
			<div className={styles.block__content}>
				<h3 className={styles.block__title}>Присутствие</h3>

				<p className={styles.block__text}>
					Будем очень признательны,
					<br />
					если Вы сообщите нам
					<br />о своем решении.
				</p>

				<form className={styles.block__form} onSubmit={handleSubmit}>
					<Input
						label={'Ваше имя'}
						id={'guestName'}
						type={'text'}
						placeholder={'Иван Иванов'}
						value={guestName}
						onChange={e => setGuestName(e.target.value)}
					/>

					<Presence presence={presence} setPresence={setPresence} />

					<button className={styles.block__btn}>Отправить</button>
				</form>
			</div>

			{showToast && (
				<Toast message={toastMessage} onClose={() => setShowToast(false)} />
			)}
		</div>
	);
};
