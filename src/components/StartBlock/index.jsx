import { useState, useEffect, useRef } from 'react';

import styles from './StartBlock.module.scss';
import video from '../../assets/video/video.mp4';
import audio from '../../assets/audio/audio.mp3';

const MusicBtn = () => {
	const audioRef = useRef(null);

	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlay = () => {
		if (audioRef.current.paused) {
			audioRef.current.play();
			setIsPlaying(true);
		} else {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	};

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = 0.3;
		}
	});

	return (
		<>
			<button
				className={styles['music-btn']}
				type='button'
				onClick={togglePlay}
			>
				{isPlaying ? 'выключить музыку' : 'включить музыку'}
			</button>
			<audio src={audio} ref={audioRef} autoPlay loop controls hidden />
		</>
	);
};

export const StartBlock = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = true;
			videoRef.current.play().catch(err => {
				console.error('AutoPlay error:', err);
			});
		}
	}, []);

	return (
		<div className={styles.block}>
			<video
				className={styles.block__video}
				autoPlay
				muted
				loop
				playsInline
				preload='auto'
				ref={videoRef}
			>
				<source src={video} type='video/mp4' />
			</video>

			<div className={styles.block__content}>
				<div className={styles.block__top}>
					<p className={styles.block__text}>WEDDING DAY</p>

					<MusicBtn />
				</div>

				<p
					className={styles.block__names}
					data-aos='zoom-in'
					data-aos-duration='3000'
					data-aos-once='true'
				>
					Тамерлан
					<br />&<br />
					Юлдуз
				</p>
			</div>
		</div>
	);
};
