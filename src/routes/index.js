const partsRouter = require('./parts');
const usersRouter = require('./users');

const apiRouter = (app) => {
    app.use('/api/parts', partsRouter);
    app.use('/api/users', usersRouter);
}
module.exports = apiRouter;