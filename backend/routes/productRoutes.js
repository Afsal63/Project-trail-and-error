import express from "express";
const router = express.Router()
import { getProduts, getProductById } from '../controllers/productCorntroller.js'


router.route('/').get(getProduts)
router.route('/:id').get(getProductById)




export default router