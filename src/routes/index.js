const partsRouter = require('./parts');
const usersRouter = require('./users');

const apiRouter = (app) => {
    app.use('/parts', partsRouter);
    app.use('/users', usersRouter);
}
module.exports = apiRouter;