'use client';

import { useAuthContext } from '@/contexts/auth-context';
import Image from 'next/image';

export default function Header() {
  const { user, login, logout } = useAuthContext();

  return (
    <header>
      {user && (
        <div>
          {user.photoURL && (
            <Image src={user.photoURL} width={30} height={30} alt="프로필 이미지" />
          )}
          <p>{user.displayName}</p>
        </div>
      )}
      {user && <button onClick={logout}>로그아웃</button>}
      {user === null && <button onClick={login}>로그인</button>}
    </header>
  );
}
