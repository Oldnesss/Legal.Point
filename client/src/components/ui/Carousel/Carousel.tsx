import React, { useState, useEffect, useRef } from 'react';

import {
  ArrowForwardIcon,
  ArrowBackIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { Box, Button, Center } from '@chakra-ui/react';
import { useAppSelector } from '../../../redux/hooks';

import './carousel.css';
import CarouselCard from './CarouselCard';

function Carousel(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const firms = useAppSelector((store) => store.firmSlice.firms);
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

  const handleNext = (): void => {
    setActiveIndex(nextIndex);
  };

  const handlePrev = (): void => {
    setActiveIndex(prevIndex);
  };

  return (
    <>
      <Box
        className="carousel"
        transform={`translateX(${-(activeIndex * 50)}%)`}
      >
        {firms.map((firm, i) => (
          <CarouselCard
            key={firm.id}
            active={activeIndex === i}
            firm={firm}
            onPrev={handlePrev}
            onNext={handleNext}
          />
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
      <Box className="button-group">
        <Button
          className="button__left"
          type="button"
          variant="solid"
          colorScheme="gray"
          disabled={activeIndex === 0}
          onClick={handlePrev}
        >
          <ChevronLeftIcon />
        </Button>

        <Button
          className="button__right"
          type="button"
          variant="solid"
          colorScheme="gray"
          disabled={activeIndex === firms.length - 1}
          onClick={handleNext}
        >
          <ChevronRightIcon />
        </Button>
      </Box>
    </>
  );
}

export default Carousel;
