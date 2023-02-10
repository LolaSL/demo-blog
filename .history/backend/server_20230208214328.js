import express from 'express';
import data from './data.js';
dotenv.config();


const app = express();

app.get('/api/v1/posts', (req, res) => {
    res.send(data.posts)
})

const port = process.env.PORT || 5000
console.log(`Port ${port}`)
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
})