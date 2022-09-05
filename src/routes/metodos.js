const { Router } = require('express');
const router = Router();

const productos = require('../Productos.json');


router.get('/', (req, res) => {
    res.json(productos);
})

router.post('/', (req, res) => {
    const { Nombre, Precio,URL, Marca, Iva, Inventario}  = req.body;
    if(Nombre && Precio && URL && Marca && Iva && Inventario){
        const Sku = productos.length + 1;
        const newProduct = {...req.body, Sku};
        productos.push(newProduct);
        res.send('se insertó el producto satisfactoriamente.');
    }else{
        res.send('No se inserto el Producto satisfactoriamente');
    }
});

module.exports = router;