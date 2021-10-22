const express = require ('express');

const app = express();
const PORT = 8000

app.use('/',(req,res) => {
    return res.json('Hello from home route')
})

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})