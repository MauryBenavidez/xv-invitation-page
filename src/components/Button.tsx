import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  target?: string;
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon = false,
  target,
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ${className}`;

  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]}`;

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={combinedStyles}>
        <span>{children}</span>
        {icon && <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      <span>{children}</span>
      {icon && <ChevronRight className="w-4 h-4" />}
    </button>
  );
}
