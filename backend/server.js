const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const app = express();

mongoose.connect(process.env.DBURI, {
  useNewUrlParser: true
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})