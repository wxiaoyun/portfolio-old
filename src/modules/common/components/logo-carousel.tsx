import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from '@/hooks';


export const LogoCarousel: React.FC<{ imgs: Img[] }> = ({ imgs }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const iconSize = isDesktop ? 75 : 50;

  const autoPlayPlugin = Autoplay({
    playOnInit: true,
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  return (
    <Carousel className="w-full max-w-fit lg:max-w-none"
      opts={{ align: "start", loop: true }}
      plugins={[autoPlayPlugin]}
    >
      <CarouselContent>
        {imgs.map((item) => (
          <CarouselItem key={item.src} className='md:basis-1/5 basis-1/4'>
            <img
              src={item.src}
              alt={item.alt}
              height={iconSize}
              width={iconSize}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
