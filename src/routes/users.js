const express = require('express');
const user = require('../usecases/user');
const { authHandler } = require('../middlewares/authHandlers');
const { adminHanlder } = require('../middlewares/permissionHandlers');

const router = express.Router();

router.get('/', authHandler, adminHanlder, async(req, res) => {
    const users = await user.getAll();
    res.json({
        success: true,
        payload: users
    })
})
router.get('/:id', authHandler, async(req, res) => {
    try {
        const { id } = req.params;
        const retrievedPart = await user.getById(id);
        res.json({
            success: true,
            payload: retrievedPart
        })
    } catch (err) {
        next(err);
    }
})
router.post('/', async(req, res, next) => {
    try {
        const { username, email, password, role } = req.body;
        const userCreated = await user.create({ username, email, password, role });
        res.json({
            success: true,
            message: 'User created',
            payload: userCreated
        })
    } catch (err) {
        next(err);
    }
})
router.put('/:id', authHandler, async(req, res, next) => {
    try {
        const { id } = req.params;
        const { username, email, password, role } = req.body;
        const userUpdated = await user.update(id, { username, email, password, role });
        res.json({
            success: true,
            message: `user ${id} updated`,
            payload: userUpdated
        })
    } catch (err) {
        next(err);
    }
})
router.patch('/:id', authHandler, async(req, res, next) => {
    try {
        const { id } = req.params;
        const userUpdated = await user.patch(id, {...req.body });
        res.json({
            success: true,
            message: `user ${id} updated through patch`,
            payload: userUpdated
        })
    } catch (err) {
        next(err);
    }
})
router.delete('/:id', adminHanlder, async(req, res, next) => {
    try {
        const { id } = req.params;
        const userDeleted = await user.del(id);
        res.json({
            success: true,
            message: `user ${id} deleted`,
            payload: userDeleted
        })
    } catch (err) {
        next(err);
    }
})
module.exports = router;