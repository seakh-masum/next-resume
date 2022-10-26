import React from 'react';
import styles from 'styles/stepper.module.scss';

export const Stepper = (props) => {
	return (
		<div className={styles.stepper}>
			<div className={`${styles.stepper__pointer} flex__column`}>
				<div
					className={
						`${styles.stepper__circle} flex align__center-center ` +
						(!props.isMobile && styles.desktop)
					}>
					{props.stepperIndex}
				</div>
				{props.hasLine && (
					<div
						className={
							`${styles.stepper__line} ` + (props.isMobile && styles.mobile)
						}></div>
				)}
			</div>
			<div className={styles.stepper__text_container}>
				<a href={props.link} target='_blank' rel='noreferrer'>
					{props.heading}
				</a>
				<p>{props.subHeading}</p>
				<b>{props.desc}</b>
			</div>
		</div>
	);
};
