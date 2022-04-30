# Places API
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

A Rest API for point of interest (POI) locations.

## Contents
 - [Technologies](#technologies)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Testing](#testing)
 - [API Documentation](#api-documentation)

## Technologies

This project is currently using:

 - NodeJS 16.14.2
 - npm 8.6.0
 - Express 4.18.8
 - Mongoose 6.3.1
 - Jest 28.0.1
 - ESLint 8.2.0

## Installation

To install the project, run

    npm install

:gear: This project uses MongoDB to store the resources. You can either install a [local instance](https://www.mongodb.com/docs/manual/installation/) to test the project locally or provision a free __MongoDB Atlas__ instance on [Cloud](https://www.mongodb.com/atlas/database?tck=docs_server).

## Usage

Create a `.env` as a copy of [.env.example](/.env.example) and fill the MONGODB_URL variable with the URL of the database that is going to be used.

The, to run the project, run

    npm start

:heavy_check_mark: Done, now you'll be able to use the API using the Swagger UI at [http://localhost:3000/doc](http://localhost:3000/doc).

## Testing

To run the automated unit tests, run

    npm test

All services and controllers should be fully tested.

:robot: This project also uses Github Actions to test it everytime a commit is pushed.

## API Documentation

:rocket: Please refer to [API Documentation](./ApiDocumentation.md).

To auto-generate the API documentation (that is used by Swagger), run

    npm run docs
