import express from "express";
const router = express.Router()
import { getProduts,
     getProductById,
     deleteProduct, 
     updateProduct,
     createProduct} from '../controllers/productCorntroller.js'
import {protect,admin}from '../middleware/authMiddleware.js'

router.route('/').get(getProduts).post(protect,admin,createProduct)
router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)




export default router