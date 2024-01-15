import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Flex,
  Button,
  Heading,
  Text,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function Carousel(): JSX.Element {
  const [reviews, setReviews] = useState([
    // ... ваш массив с данными
  ]);

  const [currentItem, setCurrentItem] = useState(0);

  const renderPerson = () => {
    const item = reviews[currentItem];
    // обновите состояния, чтобы отобразить данные
  };

  const nextPerson = () => {
    setCurrentItem((prev) => (prev + 1) % reviews.length);
  };

  const prevPerson = () => {
    setCurrentItem((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    renderPerson();
  }, [currentItem]);

  // Другие функции и обработчики событий

  return (
    <Box>
      <Flex align="center" justify="center">
        <Box>
          {/* Ваши компоненты с Chakra UI */}
          <Image
            src='/banner.webp' 
            alt="Customer photo"
            borderRadius="lg"
            height="150px"
            objectFit="cover"
          />

          <Box textAlign="center">
            <Heading fontSize="xl">{/* имя */}</Heading>
            <Text fontSize="md" fontWeight="500" color="#81e6d9" mb="4">
              {/* должность */}
            </Text>
            <Text fontSize="sm" color="#81e6d9">
              {/* текст отзыва */}
            </Text>
          </Box>

          {/* Кнопки и т.д. */}
          <HStack mt="4" spacing="4">
            <IconButton
              icon={<ChevronLeftIcon />}
              onClick={prevPerson}
              aria-label="Previous"
            />
            <IconButton
              icon={<ChevronRightIcon />}
              onClick={nextPerson}
              aria-label="Next"
            />
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Carousel;
