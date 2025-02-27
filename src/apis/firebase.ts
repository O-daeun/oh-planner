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
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider).catch((error) => {
    if (error.code === 'auth/popup-closed-by-user') {
      console.warn('사용자가 로그인 팝업을 닫았습니다.');
    } else {
      console.error('로그인 오류:', error.message);
    }
  });
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback: (user: User | null) => void) {
  onAuthStateChanged(auth, callback);
}

export async function addTask(user: User | null | undefined, taskData: Task) {
  if (!user) {
    alert('로그인 후 진행해주세요.');
    return;
  }

  try {
    const userTasksRef = collection(db, 'schedules', user.uid, 'tasks');
    addDoc(userTasksRef, taskData);
  } catch (error) {
    console.error('Error adding task: ', error);
  }
}

export async function getTasks(user: User) {
  try {
    const userTasksRef = collection(db, 'schedules', user.uid, 'tasks');
    const querySnapshot = await getDocs(userTasksRef);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Task),
    }));
  } catch (error) {
    console.error('Error getting task: ', error);
  }
}
