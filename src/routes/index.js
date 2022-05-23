const partsRouter = require('./parts');
const usersRouter = require('./users');
const authRouter = require('./auth')

const apiRouter = (app) => {
    app.use('/parts', partsRouter);
    app.use('/users', usersRouter);
    app.use('/auth', authRouter)
}
module.exports = apiRouter;