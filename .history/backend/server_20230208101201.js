import express from 'express';
import data from './data';
const app = express();

app.get('/api/v1/posts', (req, res) => {
    res.send(data.posts)
})

const