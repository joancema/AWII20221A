const { Router } =  require('express');
const { check }=  require('express-validator')  ;
const { obtenerProducto, 
        obtenerProductos,
        crearProducto,
        actualizarProducto,
        borrarProducto       
} = require('../controllers').Producto;

const { validarCampos  } = require('../middlewares');

const router =  Router();

router.get('/' , obtenerProductos )
router.get('/:id', 
[ check('id', 'El id no es válido').isMongoId(), validarCampos ]
,obtenerProducto )
router.post('/',  
[check('nombre','El nombre es obligatorio').not().isEmpty(), validarCampos]
, crearProducto)
router.put('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ],
  actualizarProducto)
router.delete('/:id', [ check('id', 'El id no es válido').isMongoId(), validarCampos ] , borrarProducto)

module.exports = router;