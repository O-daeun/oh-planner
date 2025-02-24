'use client';

import { login } from '@/apis/firebase';

export default function HomePage() {
  return (
    <div className="">
      <button onClick={login}>로그인</button>
    </div>
  );
}
