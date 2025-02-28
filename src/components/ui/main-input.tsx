import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function MainInput({ ...rest }: Props) {
  return (
    <input
      {...rest}
      className="focus:outline-var-green-main w-full rounded-lg border border-gray-200 px-4 py-3"
    />
  );
}
