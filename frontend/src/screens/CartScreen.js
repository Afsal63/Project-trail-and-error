import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import  {Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartAction' 
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'


const CartScreen = () => {
    const navigate =useNavigate()
    const {id}=useParams()
    const qty =useSearchParams()[0].get('qty')
    const dispatch =useDispatch()
    
    

    useEffect(()=>{
        if(id){
dispatch(addToCart(id,qty));
        }
    },[dispatch,id,qty])

  return (
    <div>Cart</div>
  )
}

export default CartScreen