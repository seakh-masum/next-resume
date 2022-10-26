import styles from 'styles/loader.module.scss';

export const Loader = () => {
	return (
		<div className={styles.box}>
			<div className={styles.loader}></div>
		</div>
	);
};
