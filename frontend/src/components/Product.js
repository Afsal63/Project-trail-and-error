import React from 'react'
import '../index.css';
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { useNavigate } from "react-router-dom";

const Product = ({product}) => {
    const navigate=useNavigate()

 


  return (
  <Card className=' card1 camy-3 p-3 rounded' >
      <a  onClick={(e)=>navigate(`/product/${product._id}`)}>
         <Card.Img src={product.image} variant='top'/>
      </a>
      <Card.Body>
      <a className='tt' onClick={(e)=>navigate(`/product/${product._id}`)}>
      <Card.Title as='div' className='tt' >
          <h4 className='font-weight-bold' >{product.name}</h4>
      </Card.Title>
      </a>
      <a className='tt' onClick={(e)=>navigate(`/product/${product._id}`)}>
      <Card.Title as='div' className='tt' >
          <strong className='tt' >{product.description}</strong>
      </Card.Title>
      </a>


      <Card.Text as="div">
     <Rating value={product.rating} 
     text={`${product.numReviews} reviews`}
     
     />
      </Card.Text>
      <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
  </Card>
  )
}

export default Product