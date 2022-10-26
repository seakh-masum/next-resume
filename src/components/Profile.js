import React from 'react';
import styles from 'styles/profile.module.scss';
import cards from 'styles/card.module.scss';
import Image from 'next/image';

export const Profile = ({ name, role, image }) => {
	return (
		<div className={`${cards.card} ${styles.profile}`}>
			<div className={styles.container}>
				<div className='flex__column align__center-center'>
					<div className={`${styles.container__svg}`}>
						<svg height='250' width='250'>
							<circle cx='125' cy='125' r='110'></circle>
							<circle cx='125' cy='125' r='110'></circle>
						</svg>
						<div className='position__center'>
							<Image
								src={image}
								alt=''
								className={styles.profile__img}
								width='200'
								height='200'
							/>
						</div>
					</div>
				</div>
				<div className={`${styles.container__bottom}`}>
					<div
						className={`${styles.container__text} flex__column align__center-center`}>
						<h1>{name}</h1>
						<i>{role}</i>
					</div>
				</div>
			</div>
		</div>
	);
};
