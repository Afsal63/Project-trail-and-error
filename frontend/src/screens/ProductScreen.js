import React ,{useState,useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useNavigate,useParams } from "react-router-dom";
import {Row,Col,Image,ListGroup,Button,Card } from 'react-bootstrap'
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = () => {
    const params=useParams()
    const navigate=useNavigate()
    const[product,setProduct]=useState({})
   
    useEffect(()=>{
        const fetchProducts =async () =>{
          const {data} = await axios.get(`/api/products/${params.id}`)
          setProduct(data)
        
          
        }
      fetchProducts()
        },[])
  
  return (
    <>

        <Header/>
        <Button className='btn btn-light m-3' onClick={(e)=>navigate('/')}>Go back</Button>
<Row>
   
<Col  md={6}>
<Image src={product.image} alt={product.name} fluid/>
</Col>
<Col md={3}>
<ListGroup variant='flush'>
    <ListGroup.Item>
        <h3>{product.name}</h3>
    </ListGroup.Item>
    <ListGroup.Item>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </ListGroup.Item>
        <ListGroup.Item>
Price:${product.price}
        </ListGroup.Item>
    <ListGroup.Item>
        Description:{product.description}
    </ListGroup.Item>
</ListGroup>
</Col>
<Col md={3}>
    
    <Card>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <Row>
                    <Col>
                    Price
                    </Col>
                    <Col>
                    <strong>${product.price}</strong>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>
                    Status
                    </Col>
                    <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                </Row>
            </ListGroup.Item>
            <Button className='btn-block' type="button" disabled={product.countInStock ===0}>
                Add to cart
            </Button>
        </ListGroup>
    </Card>
</Col>

</Row>
  <main></main>
        <Footer/>
    </>
  )
}

export default ProductScreen