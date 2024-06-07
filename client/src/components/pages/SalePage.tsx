import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Select,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Это поле обязательно'),
  taxId: yup.string().required('Это поле обязательно'),
  creationDate: yup.date().required('Это поле обязательно'),
  legalAddress: yup.string().required('Это поле обязательно'),
  taxOffice: yup.string().required('Это поле обязательно'),
  taxSystem: yup.string().required('Это поле обязательно'),
  taxSystemChange: yup.string().required('Это поле обязательно'),
  legalAddressAgreement: yup.string().required('Это поле обязательно'),
  mainActivity: yup.string().required('Это поле обязательно'),
  actualActivity: yup.string().required('Это поле обязательно'),
  activityConducted: yup.string().required('Это поле обязательно'),
  monthlyTurnover: yup.string().required('Это поле обязательно'),
  annualTurnover: yup.string().required('Это поле обязательно'),
  annualRevenue: yup.string().required('Это поле обязательно'),
  bankAccount: yup.string().required('Это поле обязательно'),
  reporting: yup.string().required('Это поле обязательно'),
  creditorsOrDisputes: yup.string().required('Это поле обязательно'),
  salePrice: yup.string().required('Это поле обязательно'),
  phone: yup.string().required('Это поле обязательно'),
  email: yup
    .string()
    .required('Это поле обязательно')
    .email('Введите корректный адрес электронной почты'),
});

export default function SalePage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // добавить обработку отправки данных
  };

  return (
    <Container maxW="900px" py={8}>
      <Heading as="h2" size="xl" mt={12} mb={6} textAlign="center">
        Продажа компании
      </Heading>
      <Text mb={6}>
        Убедительная просьба заполнять все разделы анкеты чтобы в дальнейшем не
        тратить время на уточнение мелочей.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} align="stretch">
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Наименование</FormLabel>
            <Input {...register('name')} />
            <Text color="red.500">{errors.name?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.taxId}>
            <FormLabel>ИНН или ОГРН</FormLabel>
            <Input {...register('taxId')} />
            <Text color="red.500">{errors.taxId?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.creationDate}>
            <FormLabel>Дата создания</FormLabel>
            <Input type="date" {...register('creationDate')} />
            <Text color="red.500">{errors.creationDate?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.legalAddress}>
            <FormLabel>Юридический адрес</FormLabel>
            <Input {...register('legalAddress')} />
            <Text color="red.500">{errors.legalAddress?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.taxOffice}>
            <FormLabel>В какой налоговой?</FormLabel>
            <Input {...register('taxOffice')} />
            <Text color="red.500">{errors.taxOffice?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.taxSystem}>
            <FormLabel>Система налогообложения</FormLabel>
            <Select {...register('taxSystem')}>
              <option value="УСН">УСН</option>
              <option value="ОСНО">ОСНО</option>
              <option value="ЕНВД">ЕНВД</option>
              <option value="ЕСХН">ЕСХН</option>
            </Select>
            <Text color="red.500">{errors.taxSystem?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.taxSystemChange}>
            <FormLabel>
              Изменялась ли система налогообложения с момента регистрации
            </FormLabel>
            <Input {...register('taxSystemChange')} />
            <Text color="red.500">{errors.taxSystemChange?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.legalAddressAgreement}>
            <FormLabel>
              Наличие договора по юридическому адресу и срок действия
            </FormLabel>
            <Input {...register('legalAddressAgreement')} />
            <Text color="red.500">{errors.legalAddressAgreement?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.mainActivity}>
            <FormLabel>Основной вид деятельности в ЕГРЮЛ</FormLabel>
            <Input {...register('mainActivity')} />
            <Text color="red.500">{errors.mainActivity?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.actualActivity}>
            <FormLabel>
              Какой вид деятельности фирма осуществляла фактически
            </FormLabel>
            <Input {...register('actualActivity')} />
            <Text color="red.500">{errors.actualActivity?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.activityConducted}>
            <FormLabel>Велась ли деятельность</FormLabel>
            <Input {...register('activityConducted')} />
            <Text color="red.500">{errors.activityConducted?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.monthlyTurnover}>
            <FormLabel>Примерные обороты в месяц</FormLabel>
            <Input {...register('monthlyTurnover')} />
            <Text color="red.500">{errors.monthlyTurnover?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.annualTurnover}>
            <FormLabel>Примерные обороты в год</FormLabel>
            <Input {...register('annualTurnover')} />
            <Text color="red.500">{errors.annualTurnover?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.annualRevenue}>
            <FormLabel>Примерная выручка в год</FormLabel>
            <Input {...register('annualRevenue')} />
            <Text color="red.500">{errors.annualRevenue?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.bankAccount}>
            <FormLabel>В каком банке открыт расчётный счёт?</FormLabel>
            <Input {...register('bankAccount')} />
            <Text color="red.500">{errors.bankAccount?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.reporting}>
            <FormLabel>
              Наличие всей отчетности с подтверждением о принятии. Какое
              подтверждение имеется?
            </FormLabel>
            <Input {...register('reporting')} />
            <Text color="red.500">{errors.reporting?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.creditorsOrDisputes}>
            <FormLabel>Имеются кредиторы или судебные споры?</FormLabel>
            <Input {...register('creditorsOrDisputes')} />
            <Text color="red.500">{errors.creditorsOrDisputes?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.salePrice}>
            <FormLabel>
              Какую сумму планируете получить от продажи ООО?
            </FormLabel>
            <Input {...register('salePrice')} />
            <Text color="red.500">{errors.salePrice?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.phone}>
            <FormLabel>Контактный телефон</FormLabel>
            <Input {...register('phone')} />
            <Text color="red.500">{errors.phone?.message}</Text>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Электронная почта</FormLabel>
            <Input {...register('email')} />
            <Text color="red.500">{errors.email?.message}</Text>
          </FormControl>

          <Button colorScheme="orange" size="lg" type="submit">
            Отправить
          </Button>
        </VStack>
      </form>
      <Text mt={6}>
        Как только Мы получим Вашу анкету Мы обязательно свяжемся с Вами.
      </Text>
    </Container>
  );
}
