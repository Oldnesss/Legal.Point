// src/components/ui/Carousel/CarouselCard.tsx

import { Box } from '@chakra-ui/react';
import React from 'react';

type Firm = {
  id: string;
  title: string;
  image: string;
};

type CarouselCardProps = {
  active: boolean;
  firm: Firm;
  onPrev: () => void;
  onNext: () => void;
  onClick: () => void; // Добавить обработчик клика
};

function CarouselCard({
  active,
  firm,
  onPrev,
  onNext,
  onClick,
}: CarouselCardProps): JSX.Element {
  return (
    <Box
      className={`carousel-card ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <Box
        className="carousel-card-content"
        bg={`url(${firm.image})`}
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          zIndex="1"
          onClick={onPrev}
        />
        <Box
          className="carousel-card-title"
          position="relative"
          zIndex="2"
          color="white"
        >
          {firm.title}
        </Box>
      </Box>
    </Box>
  );
}

export default CarouselCard;
