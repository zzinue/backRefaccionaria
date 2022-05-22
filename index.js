const express = require('express');
const app = express();
const apiRouter = require('./src/routes');
const { logErrors, errorHandler } = require('./src/middlewares/errorHandler');
const db = require('./src/lib/db');
const config = require('./src/lib/config');
const port = config.app.port;

app.use(express.json()); //middleware

apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Welcome to ${config.app.name} app, now listening on ${port}`);
    db.connect()
        .then(() => {
            console.log('DB connected');
        })
        .catch(err => {
            console.log('error connecting to database', err);
        })
})