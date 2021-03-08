import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: "AIzaSyArOo1pdUpqlUzI8Y9t0FE041bZls5YEo8",
	authDomain: "ecommerce-project-71605.firebaseapp.com",
	databaseURL: "https://ecommerce-project-71605.firebaseio.com",
	projectId: "ecommerce-project-71605",
	storageBucket: "ecommerce-project-71605.appspot.com",
	messagingSenderId: "781617158580",
	appId: "1:781617158580:web:63f22d2edd2a5daa323ae1",
	measurementId: "G-70V2JPX64C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
