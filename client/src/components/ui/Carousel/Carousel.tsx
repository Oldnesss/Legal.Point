// src/components/ui/Carousel/Carousel.tsx

import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Center } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';

import './carousel.css';
import CarouselCard from './CarouselCard';
import FirmModal from '../FirmModal';
import { closeModal, openModal } from '../../../redux/slices/modal/modalSlice';

function Carousel(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const firms = useAppSelector((store) => store.firmSlice.firms);
  const { isOpen, selectedFirm } = useAppSelector((state) => state.modalSlice);
  const dispatch = useAppDispatch();

  const nextIndex = (activeIndex + 1) % firms.length;
  const prevIndex = (activeIndex - 1 + firms.length) % firms.length;

  const handleNext = (): void => {
    setActiveIndex(nextIndex);
  };

  const handlePrev = (): void => {
    setActiveIndex(prevIndex);
  };

  const handleCardClick = (firm): void => {
    dispatch(openModal(firm));
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
            onClick={() => handleCardClick(firm)} // Передаем обработчик клика
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
      {selectedFirm && (
        <FirmModal
          firm={selectedFirm}
          isOpen={isOpen}
          onClose={() => dispatcd(closeModal())}
        />
      )}
    </>
  );
}

export default Carousel;
