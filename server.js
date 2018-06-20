const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes.js');

const port = 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
