const express = require('express');
const user = require('../usecases/users');

const router = express.Router();

router.get('/', async(req, res) => {
    const users = await user.getAll();
    res.json({
        success: true,
        payload: users
    })
})
router.get('/:id', async(req, res) => {
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
router.put('/:id', async(req, res, next) => {
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
router.patch('/:id', async(req, res, next) => {
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
router.delete('/:id', async(req, res, next) => {
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