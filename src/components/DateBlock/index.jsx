import styles from './DateBlock.module.scss';

export const DateBlock = () => {
	return (
		<div
			className={styles.block}
			data-aos='zoom-in'
			data-aos-duration='2000'
			data-aos-once='true'
		>
			<div className={styles.block__date}>03 / 01 / 25</div>
		</div>
	);
};
