import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-200';
  const variants = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg',
    secondary:
      'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
