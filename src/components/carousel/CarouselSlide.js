import React from 'react'

const CarouselSlide = (props) => {
    const {id, slideBg, slideTitle, slidedescription} = props
  return (
    <div>
            <div className="slideWrap" style={{backgroundImage: `url(${slideBg})`}}>
              <div className="textWrap">
                <h2>{slideTitle}</h2>
                <p>{slidedescription}</p>
              </div>
            </div>
          </div>
  )
}

export default CarouselSlide
