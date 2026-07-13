import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }>;

const variantClassName: Record<ButtonVariant, string> = {
  primary: 'bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/40 hover:bg-cyan-200',
  secondary: 'border border-white/15 bg-white/10 text-white hover:bg-white/15',
};

export function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={`min-h-11 rounded-full px-5 py-3 text-sm font-bold transition duration-200 disabled:cursor-not-allowed disabled:opacity-55 ${variantClassName[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
