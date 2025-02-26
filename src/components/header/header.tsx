'use client';

import { useAuthContext } from '@/contexts/auth-context';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex items-center justify-between border-b p-2">
      <Link href="/" className="font-supermagic text-lg">
        Oh Planner
      </Link>
      <div className="flex items-center gap-3">
        {user && (
          <div className="flex items-center gap-2">
            {user.photoURL && (
              <Image
                src={user.photoURL}
                width={30}
                height={30}
                alt="프로필 이미지"
                className="rounded-full shadow-sm"
              />
            )}
            <p>{user.displayName}</p>
          </div>
        )}
        {user && <button onClick={logout}>로그아웃</button>}
        {user === null && <button onClick={login}>로그인</button>}
      </div>
    </header>
  );
}
