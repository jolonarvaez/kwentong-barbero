import Image from "next/image";

interface ServiceItemProps {
  name: string;
  description: string;
  image: string;
  key: number;
}

export const ServiceItem = ({
  name,
  description,
  image,
  key,
}: ServiceItemProps) => {
  return (
    <div className="space-y-4 mx-auto z-0" key={key}>
      <div className="h-72">
        <Image
          src={image}
          alt="service image"
          width={500}
          height={500}
          loading="eager"
          className="h-full w-full object-cover bg-contain bg-center rounded-md"
        />
      </div>
      <div className="text-xl font-medium">{name}</div>
      <div className="">{description}</div>
    </div>
  );
};
