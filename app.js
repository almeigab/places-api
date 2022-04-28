require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const placesRoutes = require('./routes/places.routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/places', placesRoutes);

app.listen(PORT, (error) => {
  if(!error)
    console.log('Server is listening on port '+ PORT);
  else
    console.log('Error occured, server can\'t start', error);
},
);
