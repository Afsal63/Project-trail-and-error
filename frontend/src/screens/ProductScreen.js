import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
// import Header from '../components/Header'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button, Card,  Form, Container } from 'react-bootstrap'
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import HomeScreen from '../screens/HomeScreen'
import '../index.css';




const ProductScreen = () => {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const {id } =useParams()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
    

    useEffect(() => {
        dispatch(listProductDetails(params.id))
       
    }, [dispatch])

  
        const addToCartHandler = () => {
            navigate(`/cart/${id}?qty=${qty}`)
    }



    return (
        <>



            {/* <Header  /> */}
            <Button className='btn btn-light m-3' onClick={(e) => navigate('/')}>Go back</Button>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (

                <Row>

                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReview} reviews`} />
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
                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col> Qty</Col>
                                            <Col>
                                                <Form.Control
                                                    as='select' value={qty}
                                                    onChange={(e) => setQty(e.target.value)}>

                                                    {
                                                        [...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))
                                                    }
                                                </Form.Control>
                                            </Col>
                                        </Row>

                                    </ListGroup.Item>)}
                                <Button
                                    onClick={addToCartHandler}
                                    className='btn-block' type="button" disabled={product.countInStock === 0}>
                                    Add to cart
                                </Button>
                            </ListGroup>
                        </Card>
                    </Col>

                </Row>
            )}
   
       <HomeScreen/>
            <main></main>
            <Footer />
            
        </>
    )
}

export default ProductScreen