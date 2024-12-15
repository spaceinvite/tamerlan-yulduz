import styles from './DesktopView.module.scss';

export const DesktopView = () => {
	return (
		<div className={styles.desktop}>
			<div className={styles.desktopBlock}>
				<p className={styles.desktopBlock__text}>
					Данная страница отображается
					<br />
					только на смартфонах в
					<br />
					вертикальной ориентации
				</p>
				<p className={styles.desktopBlock__text}>
					Для просмотра приглашения
					<br />
					отсканируйте QR-код при помощи
					<br />
					камеры Вашего телефона
				</p>
				<div className={styles.desktopBlock__qr}></div>
			</div>
		</div>
	);
};
