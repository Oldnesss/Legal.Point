const express = require('express');
const nodemailer = require('nodemailer');

const apiMailRouter = express.Router();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL, // mail
    pass: process.env.PASSWORD, // пароль
  },
});

apiMailRouter.post('/', (req, res) => {
  const {
    name,
    email,
    taxId,
    creationDate,
    legalAddress,
    taxOffice,
    taxSystem,
    taxSystemChange,
    legalAddressAgreement,
    mainActivity,
    actualActivity,
    activityConducted,
    monthlyTurnover,
    annualTurnover,
    annualRevenue,
    bankAccount,
    reporting,
    creditorsOrDisputes,
    salePrice,
    phone,
  } = req.body;

  const mailOptions = {
    from: process.env.EMAIL, // Указан email администратора, который будет отображаться как отправитель
    to: 'admin@legal.point', // Адрес администратора
    subject: 'Новая заявка с формы',
    text: `Имя: ${name}
          Email: ${email}
          ИНН/ОГРН: ${taxId}
          Дата создания: ${creationDate}
          Юридический адрес: ${legalAddress}
          Налоговая: ${taxOffice}
          Система налогообложения: ${taxSystem}
          Изменялась ли система налогообложения: ${taxSystemChange}
          Договор по юридическому адресу: ${legalAddressAgreement}
          Основной вид деятельности в ЕГРЮЛ: ${mainActivity}
          Фактический вид деятельности: ${actualActivity}
          Велась ли деятельность: ${activityConducted}
          Обороты в месяц: ${monthlyTurnover}
          Обороты в год: ${annualTurnover}
          Выручка в год: ${annualRevenue}
          Банк для расчётного счёта: ${bankAccount}
          Наличие отчетности: ${reporting}
          Кредиторы или судебные споры: ${creditorsOrDisputes}
          Планируемая сумма продажи: ${salePrice}
          Телефон: ${phone}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

module.exports = apiMailRouter;
