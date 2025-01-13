interface Props {
  imageSrc: string;
  alt?: string;
  productName: string;
  price: string;
}
export default function ProductCard({
  imageSrc,
  alt,
  productName,
  price,
}: Props) {
  return (
    <div>
      <img loading="lazy" src={imageSrc} alt={alt || ""} />
      <h3 className="font-bold">{productName}</h3>
      <p>P{price}</p>
    </div>
  );
}
