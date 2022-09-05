const { Router } = require('express');
const router = Router();

const productos = require('../Productos.json');


router.get('/', (req, res) => {
    res.json(productos);
})


module.exports = router;