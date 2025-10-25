const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


// misle layer

app.use(cors());
app.use(express.json());


app.get('/', (req, res) =>{
    res.send('Food buddy app code')
})

app.listen(port, () =>{
    console.log(`Food buddy app is running ${port}`)
})