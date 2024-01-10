import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link as ChakraLink,
  Button,
  Flex,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

function ServicePage(): JSX.Element {
  return (
    <Box maxW="600px" mx="auto" mt="40" mb='100px'>
      <Accordion allowToggle allowMultiple>
        <Box flex="1" textAlign="center" fontWeight="bold" mb="40px">
          УСЛУГИ И ТАРИФЫ
        </Box>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              1. Подготовка документов и представление интересов в Арбитражах
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} pl={8}>
            <UnorderedList>
              <ListItem mb={4}>
                Составление претензионного письма: от 7 500
              </ListItem>
              <ListItem mb={4}>
                Составление претензионного письма с расчетами: от 18 000
              </ListItem>
              <ListItem mb={4}>
                Составление искового заявления по взысканию задолженности с
                расчетами: от 25 000
              </ListItem>
              <ListItem mb={4}>
                Составление искового заявления по иным требованиям: от 25 000
              </ListItem>
              <ListItem mb={4}>
                Составление ходатайств, заявлений и иных процессуальных
                документов: от 4 500
              </ListItem>
              <ListItem mb={4}>
                Полное сопровождение дела в Арбитражном суде: от 75 000
              </ListItem>
              <ListItem mb={4}>
                Полное сопровождение дела в суде общей юрисдикции: от 75 000
              </ListItem>
              <ListItem mb={4}>
                Составление апелляционных жалоб, кассационных жалоб, надзорных
                жалоб, если ранее дело сопровождалось компанией: от 24 000
              </ListItem>
              <ListItem mb={4}>
                Составление апелляционных жалоб, кассационных жалоб, надзорных
                жалоб, в т.ч ознакомление с материалами дела, если ранее дело не
                сопровождалось компанией: от 35 000
              </ListItem>
              <ListItem mb={4}>
                Участие в судебном заседании апелляционной, кассационной
                инстанции: от 28 000
              </ListItem>
              <ListItem mb={4}>
                Подготовка документов о возбуждении исполнительного
                производства: от 8 500
              </ListItem>
              <ListItem mb={4}>
                Составление заявления о банкротстве должника: от 25 000
              </ListItem>
              <ListItem mb={4}>
                Полное юридическое сопровождение исполнительного производства:
                от 85 000
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              2. Регистрация и ликвидация юридических лиц
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} pl={8}>
            <UnorderedList>
              <ListItem mb={4}>Регистрация ООО в Москве: от 35 000</ListItem>
              <ListItem mb={4}>
                Готовые ООО в Москве без переоформления: от 110 000
              </ListItem>
              <ListItem mb={4}>
                Готовые ООО в Москве с переоформлением: от 55 000
              </ListItem>
              <ListItem mb={4}>
                Регистрация изменений Устава ООО (смена юр. адреса, паспортных
                данных, видов деятельности): от 17 000
              </ListItem>
              <ListItem mb={4}>
                Индивидуальная разработка Устава ООО: от 14 000
              </ListItem>
              <ListItem mb={4}>
                Прекращение деятельности ООО путем смены участника и директора
                (с учетом государственных пошлин): от 39 000
              </ListItem>
              <ListItem mb={4}>
                Прекращение деятельности ООО путем присоединения в отдаленный
                регион с исключением из ЕГРЮЛ (с учетом государственных пошлин):
                от 120 000
              </ListItem>
              <ListItem mb={4}>
                Готовые компании в странах таможенного союза: договорная
              </ListItem>
              <ListItem mb={4}>
                Регистрация и сопровождение компании в оффшоре: договорная
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              3. Полное юридическое сопровождение бизнеса
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} pl={8}>
            <UnorderedList>
              <ListItem mb={4}>
                Выполнение всех функций юридической службы: от 120 000
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              4. Ежемесячное абонентское обслуживание
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} pl={8}>
            <UnorderedList>
              <ListItem mb={4}>
                Устные юридические консультации, экспертиза и разработка
                документов правового характера, в том числе договоров,
                соглашений, подготовка претензий, писем, предоставление правовой
                информации: от 50 000
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              5. Консультации
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} pl={8}>
            <UnorderedList>
              <ListItem mb={4}>
                Устная консультации юриста по поставленному вопросу: от 5 000
              </ListItem>
              <ListItem mb={4}>
                Консультация по вопросу организации и ведения хозяйственной
                деятельности компаний, при необходимости с привлечением
                специалистов различных областей права: от 9 000
              </ListItem>
              <ListItem mb={4}>
                Сопровождение сделок с нерезидентами: договорная
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              6. Составление договоров и сопутствующие услуги
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} pl={8}>
            <UnorderedList>
              <ListItem mb={4}>
                Составление договора (индивидуального): от 5 000
              </ListItem>
              <ListItem mb={4}>
                Правовая экспертиза договора (в зависимости от объема и
                сложности): от 6 000
              </ListItem>
              <ListItem mb={4}>
                Разработка правовых схем взаимодействия между контрагентами: от
                10 000
              </ListItem>
              <ListItem mb={4}>
                Прогнозирование возможных спорных ситуаций: от 7 000
              </ListItem>
              <ListItem mb={4}>
                Участие в переговорах с контрагентами (с выездом по Москве): от
                25 000
              </ListItem>
              <ListItem mb={4}>
                Подготовка трудовых договоров, контрактов, приказов, протоколов
                общего собрания, должностных инструкция и иных документов
                связанных с ведением кадрового учёта: от 6 000
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              7. Правовой аудит и экспертиза документов юридического лица
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} pl={8}>
            <UnorderedList>
              <ListItem mb={4}>
                Правовая экспертиза представленных документов: от 4 500
              </ListItem>
              <ListItem mb={4}>
                Правовой аудит по всей деятельности юридического лица:
                договорная
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Flex justify="center" mt="50px">
        <Button
          as={ReactRouterLink}
          to="/form"
          colorScheme="orange"
          variant="solid"
        >
          ЗАКАЗАТЬ УСЛУГУ ПРЯМО СЕЙЧАС
        </Button>
      </Flex>
    </Box>
  );
}

export default ServicePage;
