const express = require('express');
require('dotenv/config');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if(!error)
    console.log('Server is listening on port '+ PORT);
  else 
    console.log('Error occured, server can\'t start', error);
}
);
