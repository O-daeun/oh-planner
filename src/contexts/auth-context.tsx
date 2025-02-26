'use client';

import { login, logout, onUserStateChange } from '@/apis/firebase';
import { User } from 'firebase/auth';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  user: User | null | undefined;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onUserStateChange((user) => setUser(user));
  }, []);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
