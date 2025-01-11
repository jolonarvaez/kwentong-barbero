import { SERVICES } from "../../constants/config.js";
import { ServiceItem } from "./components/ServiceItem";
export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 lg:py-24">
      {SERVICES.CLASSIC_SERVICES.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </div>
  );
}
