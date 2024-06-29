import { IProduct } from "@/types";
import { createContext } from "react";

interface ICartProduct extends IProduct {
  quantity: number;
}

export interface IAppState {
  cart: { products: ICartProduct[] };
}

export const initialState: IAppState = {
  cart: { products: [] },
};

// Define the type for the cart actions
export type AppActions =
  | { type: "ADD_TO_CART"; product: ICartProduct }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number };

const AppContext = createContext<{
  state: IAppState;
  dispatch: React.Dispatch<AppActions>;
}>({ state: initialState, dispatch: () => null });

export default AppContext;
