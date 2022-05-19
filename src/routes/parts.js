const express = require('express');
const part = require('../usecases/parts');

const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        const parts = await part.getAll();
        res.json({
            success: true,
            payload: parts
        });
    } catch (err) {
        next(err);
    }
})
router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const payload = await part.getById(id);
    res.json({ success: true, payload });
})
router.post('/', async(req, res, next) => {
    try {
        const { name, price, description, image } = req.body;
        const partCreated = await part.create({ name, price, description, image });
        res.json({
            success: true,
            payload: 'Part created',
            payload: partCreated
        })
    } catch (err) {
        next(err);
    }
})
router.put('/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const { name, price, description, image } = req.body;
        const partUpdated = await part.update(id, { name, price, description, image });
        res.json({
            success: true,
            message: `part ${id} updated`,
            payload: partUpdated
        })
    } catch (err) {
        next(err);
    }
})
router.patch('/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const partUpdated = await part.patch(id, {...req.body });
        res.json({
            success: true,
            message: `part ${id} updated`,
            payload: partUpdated
        })
    } catch (err) {
        next(err);
    }
})
router.delete('/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        const partDeleted = await part.del(id);
        res.json({
            success: true,
            message: `part ${id} deleted`,
            payload: partDeleted
        })
    } catch (err) {
        next(err);
    }
})
module.exports = router;