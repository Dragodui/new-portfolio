import type { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`bg-bg border-[2px] border-primary outline-none rounded-lg text-2xl py-2 px-4 ${className}`}
    />
  );
};

export default Input;
