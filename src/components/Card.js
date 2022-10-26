import React from 'react';
import styles from 'styles/card.module.scss';

export const Card = (props) => {
	return (
		<div className={styles.card}>
			{props.header && <h1 className={styles.card__title}>{props.header}</h1>}
			{props.children}
		</div>
	);
};
