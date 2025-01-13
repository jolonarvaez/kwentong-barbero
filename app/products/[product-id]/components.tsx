import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ProductCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className="grid grid-cols-4 gap-4">
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="grid grid-cols-4 gap-4">
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="grid grid-cols-4 gap-4">
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
            <img
              loading="lazy"
              src="https://via.placeholder.com/100"
              alt="Product Grid Image"
              className="aspect-square w-full"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
