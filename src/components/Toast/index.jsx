import { useEffect } from 'react';

import styles from './Toast.module.scss';

export const Toast = ({ message, duration = 3000, onClose }) => {
	useEffect(() => {
		const timer = setTimeout(onClose, duration);
		return () => clearTimeout(timer);
	}, [duration, onClose]);

	return (
		<div className={styles.toast}>
			<p>{message}</p>
		</div>
	);
};
