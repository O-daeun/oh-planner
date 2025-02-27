import { Task } from '@/types/task-types';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  User,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback: (user: User | null) => void) {
  onAuthStateChanged(auth, (user) => {
    callback(user ? user : null);
  });
}

export async function addData(user: User | null | undefined, taskData: Task) {
  if (!user) {
    alert('로그인 후 진행해주세요.');
    return;
  }

  try {
    const userTasksRef = collection(db, 'schedules', user.uid, 'tasks');
    const docRef = await addDoc(userTasksRef, taskData);
    console.log('Task added with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding task: ', e);
  }
}
