import { PropsWithChildren } from "react";
import NavLink from "./nav-links";

interface Props extends PropsWithChildren {
  href: string;
}

export default function LinkButton({ href, children }: Props) {
  return (
    <NavLink href={href} className="bg-[#A38748] text-white px-6 py-2 rounded">
      {children}
    </NavLink>
  );
}
