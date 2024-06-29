import { IProduct } from "@/types";
import { ReactNode, useReducer } from "react";
import AppContext, { AppActions, IAppState, initialState } from "./AppContext";

// App reducer function
const appReducer = (state: IAppState, action: AppActions): IAppState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...state.cart.products, action.product],
        },
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.filter(
            (product) => product.id !== action.productId
          ),
        },
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.map((product) =>
            product.id === action.productId
              ? { ...product, quantity: action.quantity }
              : product
          ),
        },
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Action creators
const addToCart = (dispatch: React.Dispatch<AppActions>, product: IProduct) => {
  dispatch({ type: "ADD_TO_CART", product: { ...product, quantity: 1 } });
};

const removeFromCart = (
  dispatch: React.Dispatch<AppActions>,
  productId: number
) => {
  dispatch({ type: "REMOVE_FROM_CART", productId });
};

const updateQuantity = (
  dispatch: React.Dispatch<AppActions>,
  productId: number,
  quantity: number
) => {
  dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
};

export { addToCart, removeFromCart, updateQuantity };

export default AppProvider;
