import Carousel from "react-multi-carousel";
import { CarouselContainer } from "./styles";
import "react-multi-carousel/lib/styles.css";
import { Card } from "../Card";

type CardContent = {
  id: number;
  name: string;
  description: string;
  path: string;
  participations?: string[];
};

interface SelfCarouselProps {
  individualContent: CardContent[];
}

export function SelfCarousel(individualContent: SelfCarouselProps) {
  console.log(individualContent);
  const responsive = {
    tv: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1200, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <CarouselContainer>
      <Carousel
        additionalTransfrom={0}
        showDots={false}
        arrows={true}
        autoPlaySpeed={3000}
        autoPlay={false}
        centerMode={false}
        className="slider"
        containerClass="container-with-dots"
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-top"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={responsive}
      >
        {individualContent.individualContent.map((content) => {
          return (
            <Card
              name={content.name}
              url={content.path}
              description={content.description}
              participations={content.participations}
            />
          );
        })}
      </Carousel>
    </CarouselContainer>
  );
}
