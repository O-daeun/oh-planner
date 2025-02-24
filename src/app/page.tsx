'use client';

import { login, logout } from '@/apis/firebase';
import { User } from 'firebase/auth';
import { useState } from 'react';

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async () => {
    const loggedInUser = await login();
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };
  console.log(user);

  return (
    <div className="">
      {user ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={handleLogin}>로그인</button>
      )}
    </div>
  );
}
