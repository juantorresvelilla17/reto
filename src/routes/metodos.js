const { Router } = require('express');
const router = Router();

const productos = require('../Productos.json');


router.get('/', (req, res) => {
    res.json(productos);
})

router.delete('/:Sku', (req, res) => {
    const {Sku} = req.params;
   _.each(productos, (producto, i) => {
    if(producto.Sku == Sku){
        productos.splice(i, 1);
    }
   });
   res.send(productos);
});

module.exports = router;