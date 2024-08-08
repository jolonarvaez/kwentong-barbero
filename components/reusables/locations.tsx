import { CSSProperties, PropsWithChildren } from "react";
import NavLink from "./nav-links";

interface Props extends PropsWithChildren {
  id: number;
  name: string;
  photo: string;
  mobile: string;
  landline: string;
  times: string[];
}

export default function Locations({
  name,
  times,
  photo,
  mobile,
  landline,
}: Props) {
  return (
    <div
      className="h-[250px] w-[250px] rounded-lg flex flex-col items-center justify-center gap-4"
      style={{
        backgroundImage: photo,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h3 className="font-semibold">{name}</h3>
      <div className="text-sm text-center">
        {times.map((time, index) => (
          <div key={index}>{time}</div>
        ))}
      </div>

      <div className="text-sm text-center">
        {mobile} <br />
        {landline}
      </div>

      <NavLink href="/" className="bg-[#A38748] text-white px-6 py-2 rounded">
        View on Maps
      </NavLink>
    </div>
  );
}
