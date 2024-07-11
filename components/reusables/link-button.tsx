import { CSSProperties, PropsWithChildren } from 'react';
import NavLink from './nav-links';

interface Props extends PropsWithChildren {
  href: string;
  style?: CSSProperties | undefined;
  className?: string | undefined;
  leftSideIcon?: string;
}

export default function LinkButton({
  href,
  style,
  className,
  children,
  leftSideIcon,
}: Props) {
  return (
    <NavLink
      href={href}
      style={style}
      className={`bg-[#A38748] text-white px-6 py-2 rounded ${className || ''}`}
      leftSideIcon={leftSideIcon}
    >
      {children}
    </NavLink>
  );
}
