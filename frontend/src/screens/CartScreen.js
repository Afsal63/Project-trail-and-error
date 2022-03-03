import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartAction'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'



const CartScreen = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const qty = useSearchParams()[0].get('qty')
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart



  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty])

  const removeFromCartHnadler =(id)=>{
    console.log('remove');
  }
  const checkoutHandler=()=>{
    navigate('/login?redirect=shipping')
  }

  return (
    
    <Row>
      <Header/>
      <Col md={8}>
        <h1>shoping Cart</h1>
        {cartItems.length === 0 ? <Message>You cart is Empty <Link to='/'>Go back</Link></Message> : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2 }>
                    <Form.Control
                      as='select' value={item.qty}
                      onChange={(e) => dispatch(addToCart(item.product,Number( e.target.value) ))}>

                      {
                        [...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))
                      }
                    </Form.Control>

                  </Col>
                  <Col md={2}>
                    <Button type='button' variant='light' onClick={()=>removeFromCartHnadler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}

      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
            <h2>
                  Subtotal ({cartItems.reduce((acc, item) => Number(acc) + Number(item.qty), 0)})
                  items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * 
                    item.price,0).toFixed(2)}
            </ListGroup.Item>
            <ListGroupItem>
              <Button type='button' className='btn-block' disabled={cartItems.lenght===0} onClick={checkoutHandler}>
                Proceed to Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>

      </Col>
  

      
      
    </Row>
  )
}

export default CartScreen