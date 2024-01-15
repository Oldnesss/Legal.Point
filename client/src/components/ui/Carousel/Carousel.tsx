import React, { useState, useEffect, useRef } from 'react';

import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Center } from '@chakra-ui/react';
import { useAppSelector } from '../../../redux/hooks';

import './carousel.css';
import CarouselCard from './CarouselCard';

function Carousel(): JSX.Element {
  const firms = useAppSelector((store) => store.firmSlice.firms);
  const [activeIndex, setActiveIndex] = useState(0);
  // useEffect(() => {
  //   // Проверяем, что у нас есть карточки и активный индекс не выходит за пределы массива
  //   if (firms.length > 0) {
  //     // Делаем что-то с новыми данными или обновляем состояние
  //     if (activeIndex < 0 || activeIndex >= firms.length) {
  //       setActiveIndex(0);
  //     }
  //   }
  // }, [firms, activeIndex]); // Зависимости, при изменении которых будет вызываться useEffect

  const nextIndex = (activeIndex + 1) % firms.length;
  const prevIndex = (activeIndex - 1 + firms.length) % firms.length;

  return (
    <>
      <Box
        className="carousel"
        transform={`translateX(${-(activeIndex * 50)}%)`}
      >
        {firms.map((firm, i) => (
          <CarouselCard key={firm.id} active={activeIndex === i} firm={firm} />
        ))}
      </Box>
      <Center className="dots">
        {firms.map((_, i) => (
          <Box
            key={i}
            className={`dot ${activeIndex === i ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </Center>
      <Center className="button-group">
        <Button
          type="button"
          variant="solid"
          colorScheme="gray"
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex(prevIndex)}
        >
          Prev
        </Button>

        <Button
          type="button"
          variant="solid"
          colorScheme="gray"
          disabled={activeIndex === firms.length - 1}
          onClick={() => setActiveIndex(nextIndex)}
        >
          Next
        </Button>
      </Center>
    </>
  );
}

export default Carousel;
