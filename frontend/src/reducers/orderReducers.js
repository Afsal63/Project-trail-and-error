import {
    ORDER_CREAT_REQUEST,
    ORDER_CREAT_SUCCESS,
    ORDER_CREAT_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL
} from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREAT_REQUEST:
            return {
                loading: true
            }
        case ORDER_CREAT_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        case ORDER_CREAT_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state

    }

}

export const orderDetailsReducer = (state = {loading:true, orderItems: [], shippingAdress:{} },
    action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,

                order: action.payload,
            }
            case ORDER_DETAILS_FAIL:
                return{
                    loading:false,
                    error:action.payload,
                }
                default:
                    return state
    }
}

