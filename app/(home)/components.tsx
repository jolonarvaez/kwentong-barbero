import { CSSProperties, PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

export const Section = ({ className, children, style }: SectionProps) => {
  return (
    <section className={`p-6 ${className ? className : ""}`} style={style}>
      <div className="max-w-screen-lg mx-auto">{children}</div>
    </section>
  );
};
