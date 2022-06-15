import { Router } from 'express'
import { check } from 'express-validator'

import { Producto } from '../controllers'

const { crearProducto, obtenerProducto, obtenerProductos } = Producto

import funciones from '../middlewares'

const { validarCampos } = funciones

const router = Router()


router.get('/', obtenerProductos)
router.get('/:id'
, check('id', 'Debe ser un ID de mongo vAlido').isMongoId()
,validarCampos
,  obtenerProducto)
router.post('/'
, check('nombre','El nombre es obligatorio').not().isEmpty()
,validarCampos
,crearProducto)


export {router }