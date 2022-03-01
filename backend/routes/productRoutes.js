import express from "express";
import asyncHandler from "express-async-handler"
const router =express.Router()
import Product from "../models/productModel.js"

//@dec Fetch all products 
//@route Get /api/products
//@acces Public  
router.get('/',asyncHandler(async (req,res)=>{
    const products = await Product.find({})
    res.json({products})
}))

//@dec Fetch single product 
//@route Get /api/products/:id
//@acces Public 
router.get('/:id',asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)

    if(product){

        res.json(product)
    }else{
        res.status(404)
        throw new Error("product not found")
    }
    
    
}))

export default router