
import {  toast  } from 'react-toastify' ;   
import 'react-toastify/dist/ReactToastify.css' ; 

toast.configure()

const noti =()=>{
    toast.success( 'Se agrego el producto al carrito',{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
    })
}
const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const sumItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            var cant = action.payload.cantDisponible
            if(cant>0){
                if (!state.cartItems.find(item => item.id === action.payload.id)) {
                    state.cartItems.push({
                        ...action.payload,
                        quantity: 1
                    })
                    noti()
                } 
            } else{} 
                return {
                    ...state,
                    ...sumItems(state.cartItems),
                    cartItems: [...state.cartItems]
                }
            
        case "REMOVE_ITEM":
            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
            }
        case "INCREASE":
            var cant2 = action.payload.cantDisponible
            var cantCarrito = state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity
            if(cant2>cantCarrito){
                state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            }
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                ...sumItems([]),
            }
        case "CLEAR":
                return {
                    cartItems: [],
                    ...sumItems([]),
                }
        default:
            return state

    }
}