const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv/config');
const apiFirmRouter = require('./routes/apiFirmRouter');

const PORT = process.env.PORT || 3000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/firm', apiFirmRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
