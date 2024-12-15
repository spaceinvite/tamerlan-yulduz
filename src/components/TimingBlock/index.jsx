import styles from './TimingBlock.module.scss';
import pearlImg from '../../assets/img/pearl.png';

import timingData from '../../assets/data/timing.json';

export const TimingBlock = () => {
	return (
		<div className={styles.block}>
			<div className={styles.block__content}>
				<h3
					className={styles.block__title}
					data-aos='zoom-in'
					data-aos-duration='2000'
					data-aos-once='true'
				>
					Тайминг
				</h3>

				<div className={styles.block__wrapper}>
					{timingData.map(item => (
						<>
							<hr
								className={styles.block__line}
								data-aos='zoom-in'
								data-aos-duration='2000'
								data-aos-once='true'
							/>
							<div
								className={styles.block__item}
								data-aos='zoom-in'
								data-aos-duration='2000'
								data-aos-once='true'
							>
								<p className={styles['block__item--title']}>{item.time}</p>
								<p className={styles['block__item--title']}>{item.title}</p>
								<p></p>
								<p className={styles['block__item--text']}>{item.text}</p>
							</div>
						</>
					))}
					<hr
						className={styles.block__line}
						data-aos='zoom-in'
						data-aos-duration='2000'
						data-aos-once='true'
					/>
				</div>
			</div>
			<img className={styles.block__pearl} src={pearlImg} alt='pearl' />
		</div>
	);
};
