import { SERVICES } from "../../constants/config.js";
import { ServiceItem } from "./components/ServiceItem";
export default function Services() {
  return (
    <div>
      <div className="font-semibold md:text-4xl text-3xl w-full text-center p-10">
        Classic Services
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 pb-10 gap-20 max-w-[1400px] mx-auto">
        {SERVICES.CLASSIC_SERVICES.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
      <div className="font-semibold md:text-4xl text-3xl w-full text-center p-10">
        Package Deals
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 pb-10 gap-20 max-w-[1400px] mx-auto">
        {SERVICES.PREMIUM_SERVICES.map((service, index) => (
          <div className="space-y-4" key={index}>
            <div className="text-2xl">{service.name}</div>
            <div>{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
