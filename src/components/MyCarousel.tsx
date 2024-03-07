import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function MyCarousel() {
  return (
    <Carousel>
    <CarouselContent className="w-[1000px]">
      <CarouselItem>
        <Image
          src="/carousel-1.webp"
          alt="gambar"
          width={1000}
          height={250}
          className="rounded-lg"
        />
      </CarouselItem>
      <CarouselItem>
        <Image
          src="/carousel-2.webp"
          alt="gambar"
          width={1000}
          height={250}
          className="rounded-lg"
        />
      </CarouselItem>
      <CarouselItem>
        <Image
          src="/carousel-3.webp"
          alt="gambar"
          width={1000}
          height={250}
          className="rounded-lg"
        />
      </CarouselItem>
      <CarouselItem>
        <Image
          src="/carousel-4.webp"
          alt="gambar"
          width={1000}
          height={250}
          className="rounded-lg"
        />
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}
