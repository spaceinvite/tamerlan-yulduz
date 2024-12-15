import styles from './DressCodeBlock.module.scss';

import brush1 from '../../assets/img/brushes/brush-1.svg';
import brush2 from '../../assets/img/brushes/brush-2.svg';
import brush3 from '../../assets/img/brushes/brush-3.svg';
import brush4 from '../../assets/img/brushes/brush-4.svg';
import brush5 from '../../assets/img/brushes/brush-5.svg';
import brush6 from '../../assets/img/brushes/brush-6.svg';
import brush7 from '../../assets/img/brushes/brush-7.svg';
import brush8 from '../../assets/img/brushes/brush-8.svg';

export const DressCodeBlock = () => {
	const paletteList = [
		brush1,
		brush2,
		brush3,
		brush4,
		brush5,
		brush6,
		brush7,
		brush8,
	];

	return (
		<div className={styles.block}>
			<h3
				className={styles.block__title}
				data-aos='zoom-in'
				data-aos-duration='2000'
				data-aos-once='true'
			>
				Дресс-код
			</h3>

			<div className={styles.block__wrapper}>
				<p
					className={styles.block__text}
					data-aos='zoom-in'
					data-aos-duration='2000'
					data-aos-once='true'
				>
					Будем благодарны, если в своих
					<br />
					нарядах вы поддержите цветовую
					<br />
					палитру нашего праздника.
				</p>

				<p
					className={styles.block__text}
					data-aos='zoom-in'
					data-aos-duration='2000'
					data-aos-once='true'
				>
					Особая просьба к прекрасным
					<br />
					дамам: добавьте в свой образ
					<br />
					изящный цветок — пусть он
					<br />
					станет вашим элегантным
					<br />
					акцентом и поддержит
					<br />
					атмосферу торжества.
				</p>
			</div>

			<div className={styles.block__palette}>
				{paletteList.map((brush, index) => (
					<img
						src={brush}
						alt=''
						key={index}
						data-aos='zoom-in'
						data-aos-duration='2000'
						data-aos-once='true'
					/>
				))}
			</div>
		</div>
	);
};
