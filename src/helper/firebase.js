// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
// 	apiKey: process.env.FIREBASE_API_KEY,
// 	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// 	databaseURL: process.env.FIREBASE_DATABASE_URL,
// 	projectId: process.env.FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.FIREBASE_APP_ID,
// 	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

// // Initialize Firebase and Firestore
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export { db };

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyA10_Hne0PlOMyjpl3AMXVZWPczLyBJHaE',
	authDomain: 'masum-cv.firebaseapp.com',
	databaseURL: 'https://masum-cv.firebaseio.com',
	projectId: 'masum-cv',
	storageBucket: 'masum-cv.appspot.com',
	messagingSenderId: '733514146710',
	appId: '1:733514146710:web:556a863030a39819b673b7',
	measurementId: 'G-1WQGXG27F3',
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
