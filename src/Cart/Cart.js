import React from "react";
import CartButtons from "./CartButtons";
import { useRecoilValue } from "recoil";
import { cart } from './CartState/CartAtom';
import {cartState} from './CartState/CartSelector'

const Cart = () => {
  const cartItems = useRecoilValue(cart);
  const { totalCost } = useRecoilValue(cartState);
  return (
    <table className="cart">
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td className="actions">
              <CartButtons item={item} />
            </td>
            <td>{item.id}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>${item.quantity * item.price}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="4" style={{ textAlign: "right" }}>
            Total:
          </td>
          <td>${totalCost}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cart;

