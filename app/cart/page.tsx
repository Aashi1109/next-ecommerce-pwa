"use client";

import { useAppState } from "@/hooks";
import { getNumberOfProductsInCart } from "@/lib/cartUtils";

const CartPage = () => {
  const { state, dispatch } = useAppState();
  const productsInCart = getNumberOfProductsInCart(state.cart);
  return (
    <div className="flex flex-col gap-6">
      <p className="heading-1">Your cart({productsInCart} items)</p>

      {/* render all products if present */}
      <div className="flex-center">
        {productsInCart === 0 ? (
          <p>No products in cart</p>
        ) : (
          <table>
            <thead>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CartPage;
