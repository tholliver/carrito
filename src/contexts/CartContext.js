import React, { createContext, useReducer } from "react";
/*estoy importanto cart reducer y sumitems  */
import { CartReducer, sumItems } from "./CartReducer";

export const CartContext = createContext();

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false,
};

const CartContextProvider = ({ children }) => {
  /*useReducer es un hook permite escribir componenetes statefull sin necesidad de declarar una clase, me permite mejorar
      la funcionalidad de las funciones como const o function, cabe mencionar que existe componentes tipo "class" y los
      tipo funcion como function y const(me permite reducir codigo cuando en una funcion no declaro javascript)*/
  /*state para el estado, dispatch para la funcion */
  /*valores con los q se va inicializar estan en los parentesis de usereducer */
  const [state, dispatch] = useReducer(CartReducer, initialState);
  /*Cuando empleamos el hook useReducer obtenemos un array de dos elementos:
        -el primero contiene el estado
        -el segundo la función dispatch que podemos emplear para actualizar ese estado 
    
    state va reaccionar a ciertas acciones de los usuarios*/
  const increase = (payload) => {
    /*dispatch () es el método utilizado para enviar acciones y activar cambios de estado en la tienda. */
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    
    console.log("CHECKOUT", state);
    dispatch({ type: "CHECKOUT" });
  };
  /*todo lo anterior se esta agrupando aqui */
  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    ...state,
  };
  /*este lo ordena y centraliza todo lo q se va mostrar  */
  /*esta linea es importante si ella no se mostrara nada*/
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
