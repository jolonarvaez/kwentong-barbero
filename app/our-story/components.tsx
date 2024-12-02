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

export const Title = ({ className, children, style }: SectionProps) => {
  return (
    <div
      className={`font-semibold md:text-3xl text-2xl ${
        className ? className : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};
