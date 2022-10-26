import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from 'helper/GlobalService';
import styles from 'styles/contact.module.scss';
import Image from 'next/image';

export const ContactList = ({ isMobile }) => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		getContacts();
	}, []);

	const getContacts = () => {
		const query = firebaseQuery('contacts');
		onSnapshot(query, (querySnapshot) => {
			setContacts(firebaseDataMapping(querySnapshot));
		});
	};

	return (
		<div
			className={`${styles.contact__wrapper} grid__col-4 ${
				isMobile ? 'gap-3' : 'gap-5'
			}`}>
			{contacts.map((item, index) => (
				<a
					href={item.link}
					key={index}
					className={`${styles.contact__item} align__center-center`}
					style={{
						background: item.color,
					}}>
					<Image
						height='40'
						width='40'
						className={styles.contact__image}
						style={{ width: isMobile ? '1.5rem' : '2rem' }}
						src={item.icon}
						alt=''
					/>
				</a>
			))}
		</div>
	);
};
