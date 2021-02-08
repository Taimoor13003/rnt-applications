import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: `${require('../../../../images/gallery1/3.jpg')}`,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: `${require('../../../../images/gallery1/10.jpg')}`,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: `${require('../../../../images/gallery1/2.jpg')}`,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="cover-img "
        
      >
        <img src={item.src} alt={item.altText} style={{height:"100%",width:"100%",filter:"brightness(30%)"}}  />

        <CarouselCaption 
        // captionText={item.caption}
        // className="bg-dark corousel-caption "
        
        //  captionHeader={item.caption}

          />
          
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      className="cover-img"
      previous={previous}
    >
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      <CarouselControl direction="prev" className=""  directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" className=""  directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;