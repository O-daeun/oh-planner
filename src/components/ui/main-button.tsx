import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function MainButton({ children, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`bg-var-orange-main text-whit rounded-md p-2 text-lg ${className}`}
    >
      {children}
    </button>
  );
}
