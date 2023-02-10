import express from 'express';
import data from './data';
const app = express();

app.get('/api/v1/posts', (req, res) => {
    res.send(data.posts)
})

const port = process.env.PORT || 5050
app.listen(port, ()=>{})