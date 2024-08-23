// Dependencies
const express = require('express');
const sequelize = require('./config/connection');

// Create app / port
const app = express();
const PORT = process.env.PORT || 3001;

// initialize
app.use(express.json());

// connect to db
sequelize.sync({force:false}).then(()=>{
    // Launch
    app.listen(PORT,()=>console.log(`Now Listening at ${PORT}`));
})