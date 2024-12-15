import styles from './EndBlock.module.scss';
import flowerImg from '../../assets/img/flower.svg';

export const EndBlock = () => {
	return (
		<div
			className={styles.block}
			data-aos='zoom-in'
			data-aos-duration='2000'
			data-aos-once='true'
		>
			<h3 className={styles.block__title}>
				До скорой
				<br />
				встречи!
			</h3>

			<img src={flowerImg} alt='flower' />
		</div>
	);
};
