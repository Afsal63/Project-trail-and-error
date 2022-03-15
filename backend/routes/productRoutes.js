import express from "express";
const router = express.Router()
import { getProduts,
     getProductById,
     deleteProduct } from '../controllers/productCorntroller.js'
import {protect,admin}from '../middleware/authMiddleware.js'

router.route('/').get(getProduts)
router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct)




export default router