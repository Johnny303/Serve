import express from "express"
const app = express()

app.get('/', (req, res) => {
    const q = req.query
    console.log(q)
    res.send(`Ciao, ${q.name}`)
})


app.get('/another-path', (req, res) => {
    res.send('Ciao on another path')
})


app.listen(3000, () => {
    console.log(`Open this link in your browser: http://127.0.0.1:3000`)
})

app.get('/users/:userId', (req, res) => {
    res.send(`The user id is: ${req.params.userId}`);
  });