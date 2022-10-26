import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from 'helper/GlobalService';
import styles from 'styles/hobby.module.scss';
import Image from 'next/image';

export const HobbyList = ({ isMobile }) => {
	const [hobbies, setHobbies] = useState([]);

	useEffect(() => {
		getHobbies();
	}, []);

	const getHobbies = () => {
		const q = firebaseQuery('hobbies');
		onSnapshot(q, (querySnapshot) => {
			setHobbies(firebaseDataMapping(querySnapshot));
		});
	};

	return (
		<div
			className={`${styles.chip__wrapper} flex__row flex__wrap align__start-center`}>
			{hobbies.map((item, index) => (
				<div
					key={index}
					className={`${styles.chip} ${styles[`color__${item.color}`]}`}
					style={{ fontSize: isMobile && '0.8rem' }}>
					<Image height='20' width='20' src={item.icon} alt='' />
					{item.name}
				</div>
			))}
		</div>
	);
};
