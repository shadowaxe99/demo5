Here is an example of how you might implement the stated requirements in code. This particular code is a simple, yet robust, carousel component using Next.js and styled-components for CSS-in-JS. The entire component is broken down into multiple reusable components to achieve code maintenance and scalability.

```javascript
import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;

const CarouselPrevButton = styled(CarouselButton)`
  left: 10px;
`;

const CarouselNextButton = styled(CarouselButton)`
  right: 10px;
`;

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  const goNext = () => currentIndex < items.length - 1 && setCurrentIndex(currentIndex + 1);

  return (
    <div>
      <CarouselPrevButton onClick={goPrev}>Prev</CarouselPrevButton>
      <CarouselContainer>
        {items.map((item, index) => (
          <CarouselItem key={index} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContainer>
      <CarouselNextButton onClick={goNext}>Next</CarouselNextButton>
    </div>
  );
};

export default Carousel;
```

Note: The carousel leverages principally the CSS Scroll Snap feature and is controlled via the state managed by React Hooks. Buttons are provided for user control. Splitting the code into styled-components enhances readability, maintenance, and reusability. Should it need to evolve, the component design makes it easy to add in extra features or adjust current ones without breaking the component.