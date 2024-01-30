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
  onPrev: () => void; // Функция для переключения на предыдущий слайд
  onNext: () => void; // Функция для переключения на следующий слайд
};

function CarouselCard({
  active,
  firm,
  onPrev,
  onNext,
}: CarouselCardProps): JSX.Element {
  return (
    <Box className={`carousel-card ${active ? 'active' : ''}`}>
      {/* Используйте firm для отображения данных */}
      <Box
        className="carousel-card-content"
        bg={`url(${firm.image})`}
        position="relative"
        onClick={onNext} // Перелистнуть на следующий слайд при клике на картинку
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.5)" // Измените цвет маски по вашему вкусу
          zIndex="1"
          onClick={onPrev} // Перелистнуть на предыдущий слайд при клике на маску
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
