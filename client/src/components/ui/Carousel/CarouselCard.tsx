import { Box } from '@chakra-ui/react';
import React from 'react';


function CarouselCard({ active, firm }): JSX.Element {
  return (
    <Box className={`carousel-card ${active ? 'active' : ''}`}>
      {/* Используйте firm для отображения данных */}
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
          backgroundColor="rgba(0, 0, 0, 0.5)" // Измените цвет маски по вашему вкусу
          zIndex="1"
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
