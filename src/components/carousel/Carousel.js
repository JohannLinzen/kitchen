import React, { useState, useEffect, useCallback } from "react";
import { client } from "../../client";
import CarouselSlide from "./CarouselSlide";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";

// SwiperCore.use([Navigation]);

const Carousel = () => {
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  const [carouselSlides, setCarouselSlides] = useState([]);

  const cleanUpCarouselSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slidedescription = fields.description;
      const slideBg = fields.image.fields.file.url;
      const updatedSlide = { id, slideTitle, slidedescription, slideBg };
      return updatedSlide;
    });
    setCarouselSlides(cleanSlides);
  }, []);

  // convert this function into ansrc/client.js asynchronous function
  const getCarouselSlides = useCallback(async () => {
    setIsCarouselLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "kitchenCarousel",
      });
      const responseData = response.items;
      responseData
        ? cleanUpCarouselSlides(responseData)
        : setCarouselSlides([]);
      setIsCarouselLoading(false);
    } catch (error) {
      console.log(error);
      setIsCarouselLoading(false);
    }
  }, [cleanUpCarouselSlides]);
  useEffect(() => {
    getCarouselSlides();
  }, [getCarouselSlides]);

  // If there are no slides to display then do not render the component
  if (!Array.isArray(carouselSlides) || !carouselSlides.length) {
    return null;
  }

  return (
    <div className="carousel">
      {/* <Swiper navigation> */}
        {carouselSlides.map((item) => {
          const { id, slideBg, slideTitle, slidedescription } = item;
          return (
            // <SwiperSlide key={id}>
              <CarouselSlide
                key={id}
                slideBg={slideBg}
                slideTitle={slideTitle}
                slidedescription={slidedescription}
              />
            // </SwiperSlide>
          );
        })}
      {/* </Swiper> */}
    </div>
  );
};

export default Carousel;
