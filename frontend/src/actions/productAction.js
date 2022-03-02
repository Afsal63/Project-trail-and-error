import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'

export const listProducts=(id)=>async (dispatch)=> {
 try {
     dispatch({type: PRODUCT_LIST_REQUEST})

     const{data} =await axios.get('/api/products/')
     console.log(data);
     dispatch ({
         type:PRODUCT_LIST_SUCCESS,
         payload:data
     })
     
 } catch (error) {
     dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.messag
     })
 }
}
export const listProductDetails=(id)=>async (dispatch)=> {
 try {
     dispatch({type: PRODUCT_DETAILS_REQUEST})
     console.log(id);

     const{data} =await axios.get(`/api/products/${id}`)
     console.log(data);
     dispatch ({
         type:PRODUCT_DETAILS_SUCCESS,
         payload:data
     })
     
 } catch (error) {
     dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.messag
     })
 }
}