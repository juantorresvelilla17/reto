const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const productos = require('../Productos.json');


router.get('/', (req, res) => {
    res.json(productos);
});

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

router.delete('/:Sku', (req, res) => {
    const {Sku} = req.params;
   _.each(productos, (producto, i) => {
    if(producto.Sku == Sku){
        productos.splice(i, 1);
    }
   });
   res.send('deleted');
});

router.get('/:Sku', (req, res) => {
    const {Sku} = req.params;
    _.each(productos, (producto, i) => {
        if(producto.Sku == Sku){
            res.json(producto);
        }
    });
    res.json(producto);
});

/*router.put('/:Sku', (req, res) => {
    const {Sku} = req.params;
    const { Nombre, Precio, URL, Marca, Iva, Inventario}  = req.body;
    if(Nombre && Precio && URL && Marca && Iva && Inventario){
        _.each(productos, (producto, i) => {
            if(producto.Sku == Sku){
                producto.Nombre = nombre;
                producto.Precio = precio;
                producto.URL = url;
                producto.Marca = marca;
                producto.Iva = iva;
                producto.Inventario = inventario;                
            }
           });
           res.send('Actualizado');
           //res.json(productos);
    }else{
        res.status(500).json({error: 'No actualizado'});
    }


});*/




module.exports = router;
