import { CSSProperties, PropsWithChildren } from "react";
import NavLink from "./nav-links";

interface Props extends PropsWithChildren {
  id: number;
  name: string;
  photo: string;
  mobile: string;
  landline: string;
  times: string[];
  link: string;
}

export default function Locations({
  name,
  times,
  photo,
  mobile,
  landline,
  link,
}: Props) {
  return (
    <div
      className="h-[250px] w-[250px] rounded-lg flex flex-col items-center justify-between py-5 gap-4"
      style={{
        backgroundImage: photo,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="font-semibold text-center">{name}</h3>
      <div className="text-center">
        {times.map((time, index) => (
          <div key={index}>{time}</div>
        ))}
      </div>

      <div className="text-center">
        <a href={`tel:${mobile}`}> {mobile}</a> <br />
        <a href={`tel:+63${landline}`}>{landline}</a>
      </div>

      <NavLink href={link || "#"} className="bg-[#A38748] text-white px-6 py-2 rounded">
        View on Maps
      </NavLink>
    </div>
  );
}
