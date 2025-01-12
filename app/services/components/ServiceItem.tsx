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
        <img
          src={image}
          loading="lazy"
          className="h-full w-full object-cover bg-contain bg-center rounded-md"
        />
      </div>
      <div className="text-xl font-medium">{name}</div>
      <div className="">{description}</div>
    </div>
  );
};
