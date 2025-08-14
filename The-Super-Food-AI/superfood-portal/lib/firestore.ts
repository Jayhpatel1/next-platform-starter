import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { auth } from "./firebase";

export async function saveProcurement(payload: { items: string[]; frequency: string; total: number; txnId: string }) {
	const uid = auth.currentUser?.uid ?? null;
	return addDoc(collection(db, "procurements"), {
		...payload,
		uid,
		createdAt: serverTimestamp(),
	});
}

export async function saveMetric(payload: { kind: string; value: number }) {
	const uid = auth.currentUser?.uid ?? null;
	return addDoc(collection(db, "metrics"), {
		...payload,
		uid,
		createdAt: serverTimestamp(),
	});
}