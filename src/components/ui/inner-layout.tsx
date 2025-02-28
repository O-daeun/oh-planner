import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function InnerLayout({ children, className = '' }: Props) {
  return <div className={`mx-auto max-w-[1000px] px-5 ${className}`}>{children}</div>;
}
