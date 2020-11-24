import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const noti = () => {
  toast.success("Se agrego el producto al carrito", {
    autoClose: 2000,
  });
};
const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      var cant = action.payload.cantDisponible;
      if (cant > 0) {
        if (!state.cartItems.find((item) => item.id === action.payload.id)) {
          state.cartItems.push({
            ...action.payload,
            quantity: 1,
          });
          noti();
        }
      } else {
      }
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };
    case "INCREASE":
      var cant2 = action.payload.cantDisponible;
      var cantCarrito =
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.payload.id)
        ].quantity;
      if (cant2 > cantCarrito) {
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.payload.id)
        ].quantity++;
      }
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "DECREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "CHECKOUT":
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };
    case "CLEAR":
      function func1() {
        let total = state.cartItems.reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )
          .toFixed(2);
          //So in useContext -----try(1)
        let itemCount = state.cartItems.reduce(
          (total, product) => total + product.quantity,
          0
        );
        let current_datetime = new Date();
        let formatted_date =
          current_datetime.getFullYear() +
          "-" +
          (current_datetime.getMonth() + 1) +
          "-" +
          current_datetime.getDate() +
          " " +
          current_datetime.getHours() +
          ":" +
          current_datetime.getMinutes() +
          ":" +
          current_datetime.getSeconds();

        const newPedido = [
          {
            direccion: "sameHouseEveryone",
            fechaPedido: formatted_date,
            cantidadTotal: itemCount,
            totalPagar: total,
            idclienteP: 1,
          },
        ];

        axios
          .post("https://alfasoft-api.herokuapp.com/pedido", newPedido, {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log(response);
          })

          .catch((error) => {
            console.log(error);
          });

        //--------------------Func2
        const arr = [];
        state.cartItems.map((item) => {
          var newADE = 21;
          arr.push({
            pedido_idpedido: newADE,
            producto_idproducto: item.id,
            cantidadComp: item.quantity,
          });
        });

        console.log(arr, "Showing the array insert to pedidosProductos");

        axios
          .post("https://alfasoft-api.herokuapp.com/pedido/items", arr, {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      func1();

      return {
        cartItems: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
};
