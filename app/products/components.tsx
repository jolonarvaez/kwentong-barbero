interface ProductGridItemProps {
  name: string;
  price: number;
  img: string;
}

export const ProductGridItem = ({ name, price, img }: ProductGridItemProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <img
        src={img}
        alt={name}
        className="w-full aspect-square object-contain"
      />
      <div>
        <h3>{name}</h3>
        <p>P{price}</p>
      </div>
    </div>
  );
};
