import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
dotenv.config();
import http from 'http';


import logger from 'morgan';
import bodyParser from 'body-parser';
const hostname = '127.0.0.1';


const app = express() // setup express application const server = http.createServer(app); app.use(logger('dev')); // log requests to the console // Parse incoming requests data app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: false })); app.get('*', (req, res) => res.status(200).send({ message: 'Welcome to the default API route', })); server.listen(port, hostname, () => { console.log(`Server running at http://${hostname}:${port}/`); });
application const server = http.createServer(app)



app.get('/api/v1/posts', (req, res) => {
    res.send(data.posts)
})

const port = process.env.PORT || 5050
console.log(process.env.PORT)
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
})