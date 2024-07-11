import Link from 'next/link';
import { CSSProperties, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  href: string;
  className?: string;
  style?: CSSProperties | undefined;
  leftSideIcon?: string;
}

export default function NavLink({
  href,
  className,
  style,
  leftSideIcon,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className={`hover:opacity-70 transition-opacity ${className || ''}`}
      style={style}
    >
      <div className='flex flex-row content-center'>
        {leftSideIcon && (
          <img
            src={leftSideIcon}
            alt='facebook-logo'
            className='mr-2'
            style={{
              objectFit: 'contain',
            }}
          />
        )}
        {children}
      </div>
    </Link>
  );
}
