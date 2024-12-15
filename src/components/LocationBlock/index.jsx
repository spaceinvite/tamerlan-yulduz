import styles from './LocationBlock.module.scss';

export const LocationBlock = () => {
	return (
		<div className={styles.block}>
			<h3
				className={styles.block__title}
				data-aos='zoom-in'
				data-aos-duration='2000'
				data-aos-once='true'
			>
				Локация
			</h3>

			<div className={styles.block__wrapper}>
				<p
					className={styles.block__text}
					data-aos='zoom-in'
					data-aos-duration='2000'
					data-aos-once='true'
				>
					Наш праздник пройдёт
					<br />
					по адресу:
				</p>

				<p
					className={styles.block__text}
					data-aos='zoom-in'
					data-aos-duration='2000'
					data-aos-once='true'
				>
					с. Терекли-Мектеб,
					<br />
					б/з «Amor Fati»
				</p>
			</div>
		</div>
	);
};
