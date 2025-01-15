interface ProductGridItemProps {
  name: string;
  price: number;
  image: string;
}

import Image from "next/image";

export const ProductGridItem = ({ name, price, image }: ProductGridItemProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Image
        loading="lazy"
        src={image}
        alt={name}
        className="w-full aspect-square object-contain"
        width={300}
        height={300}
      />
      <div className="space-y-2">
        <div className="text-xl">{name}</div>
        <p>P{price}.00</p>
      </div>
    </div>
  );
};
