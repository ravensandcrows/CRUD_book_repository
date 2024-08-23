// Dependencies
const express = require('express');

// Create app / port
const app = express();
const PORT = process.env.PORT || 3001;

// initialize
app.use(express.json());


// launch
app.listen(PORT, ()=>{
    console.log(`Now Listening at ${PORT}`);
})