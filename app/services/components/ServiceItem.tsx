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
    <div className="space-y-4 mx-auto -z-0" key={key}>
      <div className="w-screen md:w-72 h-72 overflow-hidden">
        <img
          src={image}
          className="w-full h-full transition-filter duration-300 ease-in-out blur-none hover:blur-sm"
        />
        <div className="hover:visible hidden">
          {description}
        </div>
      </div>
      <div className="text-lg">{name}</div>
    </div>
  );
};
