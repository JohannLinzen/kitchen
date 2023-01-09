import React from "react";

const CarouselSlide = (props) => {
  const { id, slideBg, slideTitle, slidedescription } = props;
  return (
    <div>
      <div
        className="slideWrap"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url(${slideBg})`,
        }}
      >
        <div className="textWrap">
          <h2>{slideTitle}</h2>
          <p>{slidedescription}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
