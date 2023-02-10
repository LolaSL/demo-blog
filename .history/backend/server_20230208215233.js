import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import logger from 'morgan';
import bodyParser from 'body-parser';

const port = process.env.PORT || 5050
const hostname = '127.0.0.1';
const app = express() 
 const server = http.createServer(app)
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'));
app.use(bodyParser.json());
app.get('/api/v1/posts', (req, res) => {
    res.send(data.posts)
})

app.get('*', (req, res) => res.status(200).send({ message: 'Welcome to the default API route', }));

server.listen(port, hostname, () => { console.log(`Server running at http://${hostname}:${port}/`); });