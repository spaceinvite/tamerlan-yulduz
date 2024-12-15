import { useState, useEffect, useRef } from 'react';

import styles from './StartBlock.module.scss';
import video from '../../assets/video/video.mp4';
import preview from '../../assets/img/main-bg.jpg';

const MusicBtn = ({ isAudioPlaying, isVideoPlaying, toggleAudio }) => {
	return (
		<button className={styles['music-btn']} type='button' onClick={toggleAudio}>
			{isVideoPlaying
				? isAudioPlaying
					? 'выключить музыку'
					: 'включить музыку'
				: 'включить видео'}
		</button>
	);
};

export const StartBlock = () => {
	const videoRef = useRef(null);
	const [isAudioPlaying, setIsAudioPlaying] = useState(false);
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);

	const toggleAudio = () => {
		if (videoRef.current) {
			if (!isVideoPlaying) {
				videoRef.current.play().catch(err => {
					console.error('AutoPlay error:', err);
				});
				setIsVideoPlaying(true);
			}

			if (videoRef.current.muted) {
				videoRef.current.muted = false;
				setIsAudioPlaying(true);
			} else {
				videoRef.current.muted = true;
				setIsAudioPlaying(false);
			}
		}
	};

	return (
		<div className={styles.block}>
			<video
				className={styles.block__video}
				muted
				loop
				playsInline
				preload='auto'
				poster={preview}
				ref={videoRef}
			>
				<source src={video} type='video/mp4' />
			</video>

			<div className={styles.block__content}>
				<div className={styles.block__top}>
					<p className={styles.block__text}>WEDDING DAY</p>

					<MusicBtn
						isAudioPlaying={isAudioPlaying}
						isVideoPlaying={isVideoPlaying}
						toggleAudio={toggleAudio}
					/>
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
