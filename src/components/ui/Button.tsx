import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`group relative overflow-hidden bg-transparent border-[2px] border-text px-7 py-3 text-2xl rounded-lg ${className}`}
      style={{
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Background overlay */}
      <span className="absolute bottom-0 left-0 w-full h-0 bg-text transition-all duration-500 ease-in-out group-hover:h-full z-0"></span>

      {/* Text content */}
      <span className="relative z-10 hover:text-bg duration-500">
        {children}
      </span>
    </button>
  );
};

export default Button;
