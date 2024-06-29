// utils/cartUtils.ts

import { IAppState } from "@/context/AppContext";

/**
 * Checks if a product is already in the cart.
 * @param cart - The cart object containing an array of products.
 * @param productId - The ID of the product to check.
 * @returns True if the product is in the cart, false otherwise.
 */
export const isProductInCart = (
  cart: IAppState["cart"],
  productId: number
): boolean => {
  return cart.products.some((product) => product.id === productId);
};

export const getNumberOfProductsInCart = (cart: IAppState["cart"]) => {
  return cart.products.length;
};
