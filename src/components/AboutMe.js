import React from 'react';
import styles from 'styles/about-me.module.scss';

export const AboutMe = ({ introduction, description }) => {
	return (
		<div className={styles.aboutme}>
			<p>{introduction}</p>
			<ul>
				{description?.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};
