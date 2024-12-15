import styles from './InviteBlock.module.scss';

export const InviteBlock = () => {
	return (
		<div className={styles.block}>
			<h3
				className={styles.block__title}
				data-aos='zoom-in'
				data-aos-duration='2000'
				data-aos-once='true'
			>
				Дорогие гости!
			</h3>

			<p
				className={styles.block__text}
				data-aos='zoom-in'
				data-aos-duration='2000'
				data-aos-once='true'
			>
				Мы давно ждали момента,
				<br />
				когда вместе с Вами сможем
				<br />
				разделить самый важный
				<br />и счастливый день в нашей
				<br />
				жизни — день нашей свадьбы!
			</p>
		</div>
	);
};
