// Dependencies
const express = require('express');
const sequelize = require('./config/connection');


// paths
const routes = require('./routes');

// Create app / port
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes);


// connect to db
sequelize.sync({ force: false }).then(() => {
    // Launch
    app.listen(PORT, () => console.log(`Now Listening at ${PORT}`));
});