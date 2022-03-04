import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"

//@dec Fetch all products 
//@route Get /api/products
//@acces Public  

const getProduts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})
//@dec Fetch single product 
//@route Get /api/products/:id
//@acces Public 

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
        console.log(product);
    } else {
        res.status(404)
        throw new Error('Product not found')
        
       
    }

})

export {
    getProduts
    , getProductById
}