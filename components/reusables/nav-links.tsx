import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href: string;
  className?: string;
}

export default function NavLink({ href, className, children }: Props) {
  return (
    <Link
      href={href}
      className={`hover:opacity-70 transition-opacity ${
        className ? className : ""
      }`}
    >
      {children}
    </Link>
  );
}
