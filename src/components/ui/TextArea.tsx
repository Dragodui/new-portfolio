import { FC, TextareaHTMLAttributes } from 'react';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const TextArea: FC<InputProps> = ({ className, ...props }) => {
  return (
    <textarea
      {...props}
      rows={5}
      className={`bg-bg border-[2px] border-primary outline-none rounded-lg text-2xl py-2 px-4 ${className}`}
    />
  );
};

export default TextArea;
