import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function MainButton({ children, className, disabled, ...rest }: Props) {
  return (
    <button
      disabled={disabled}
      {...rest}
      className={`rounded-md p-2 text-lg duration-200 ${disabled ? 'bg-gray-300 text-gray-400' : 'bg-var-orange-main hover:bg-var-orange-main/90 text-white'} ${className}`}
    >
      {children}
    </button>
  );
}
