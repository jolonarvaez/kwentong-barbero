import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  className?: string;
}

export const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={`p-6 ${className ? className : ""}`}>
      <div className="max-w-screen-lg mx-auto">{children}</div>
    </section>
  );
};
