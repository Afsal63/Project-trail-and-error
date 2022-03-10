
import React, { useEffect } from 'react'

import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Checkout'
import { getOrderDetails } from '../actions/oorderActions'
import { Link, useNavigate, useParams } from 'react-router-dom'


const OrderScreen = () => {
  const params = useParams()
  const orderId = params.id
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  if (!loading) {
    //Calculate Prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    order.itemsPrice = addDecimals(order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    ))

  }



  useEffect(() => {
    dispatch(getOrderDetails(orderId))
  }, [])



  return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
    : <>
      <h1> Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p> <strong>Name:</strong> {order.user.name}</p>
              <p> <strong>Email:</strong>{' '}
                <a className='text-decoration-none' href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.aaddress},{order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}

              </p>
              {order.isDelivered ?(
                <Message variant='success'>Delivered on {order.deliveredAt}</Message>
              ):(<Message variant='danger'>Not Delivered</Message>)}
            </ListGroup.Item>
            <ListGroup.Item>

              <h2>Payment Method</h2>
              <p>

              <strong>Method:</strong>
              {order.paymentMethod}
              </p>
              {order.isPaid ? <Message variant='success'>Paind on{order.paidAt}</Message> :
              <Message variant='danger'>Not Paid</Message>}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>

                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              {/* {!order.isPaid && !order.isCancelled && 
                                order.paymentMethod === 'PayPal' && (
                                    <>

                                        <ListGroup.Item>
                                            {loadingPay && <Loader />}
                                            {!sdkReady ? <Loader /> : (
                                                <PayPalButton amount={order.totalPrice} onSuccess={submitPaymentHandler} />
                                            )}
                                        </ListGroup.Item>
                                    </>
                                )} */}

              {/* {!order.isPaid && !order.isCancelled  && order.paymentMethod === 'RazorPay' && (
                                <ListGroup.Item>
                                    <Button onClick={showRazorpay} className='btn btn-block round'>Pay with RazorPay</Button>
                                </ListGroup.Item>
                            )}

                            {!order.isCancelled ? (
                                <ListGroup.Item>
                                    <Button
                                        type="button"
                                        className="btn btn-danger btn-block"
                                        onClick={cancelHandler}
                                    >
                                        Cancel the Order
                                    </Button>
                                </ListGroup.Item>
                            ) : (
                                <ListGroup.Item>
                                    <Button type="button" className="btn btn-warning btn-block">
                                        Order Cancelled
                                    </Button>
                                </ListGroup.Item>
                            )}

                            {loadingDeliver && <Loader />}
                            {userInfo &&
                                userInfo.isAdmin &&
                                order.isPaid &&
                                !order.isDelivered && !order.isCancelled && (
                                    <ListGroup.Item>
                                        <Button
                                            type='button'
                                            className='btn btn-block'
                                            onClick={deliverHandler}
                                        >
                                            Mark As Delivered
                                        </Button>
                                    </ListGroup.Item>
                                )} */}


            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
}

export default OrderScreen;