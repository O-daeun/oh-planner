import { LabelHTMLAttributes, ReactNode } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  className?: string;
  children: ReactNode;
}

export default function Label({ label, className = '', children, ...rest }: Props) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="" {...rest}>
        {label}
      </label>
      {children}
    </div>
  );
}
