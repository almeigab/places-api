require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const poiRoutes = require('./routes/poi.routes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use('/poi', poiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if(!error)
    console.log('Server is listening on port '+ PORT);
  else
    console.log('Error occured, server can\'t start', error);
},
);
