import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, setDoc, addDoc, onSnapshot } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyB_placeholder_' + Math.random().toString(36).slice(2, 10),
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'superfood-ai.firebaseapp.com',
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'superfood-ai',
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'superfood-ai.appspot.com',
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '000000000000',
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:000000000000:web:placeholder'
};

export function getFirebase() {
	const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const firestore = getFirestore(app);
	const storage = getStorage(app);
	return { auth, firestore, storage };
}

export function createRecaptchaVerifier(containerId = 'recaptcha-container') {
	const { auth } = getFirebase();
	if (!globalThis.window) return null;
	// Invisible reCAPTCHA for phone auth
	return new RecaptchaVerifier(auth, containerId, {
		size: 'invisible'
	});
}

export async function signInWithPhone(phoneNumber) {
	const verifier = createRecaptchaVerifier();
	const { auth } = getFirebase();
	return await signInWithPhoneNumber(auth, phoneNumber, verifier);
}

export async function signOutUser() {
	const { auth } = getFirebase();
	await signOut(auth);
}

export async function saveDocument(path, data) {
	const { firestore } = getFirebase();
	const [col, id] = path.split('/');
	if (id) {
		await setDoc(doc(firestore, col, id), data, { merge: true });
		return { id };
	} else {
		const ref = await addDoc(collection(firestore, col), data);
		return { id: ref.id };
	}
}

export async function loadDocument(path) {
	const { firestore } = getFirebase();
	const [col, id] = path.split('/');
	const snap = await getDoc(doc(firestore, col, id));
	return snap.exists() ? snap.data() : null;
}

export function subscribeDocument(path, cb) {
	const { firestore } = getFirebase();
	const [col, id] = path.split('/');
	return onSnapshot(doc(firestore, col, id), (snap) => cb(snap.exists() ? snap.data() : null));
}