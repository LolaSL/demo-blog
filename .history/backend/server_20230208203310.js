import express from 'express';
impot


const app = express();

app.get('/api/v1/posts', (req, res) => {
    res.send(data.posts)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
})