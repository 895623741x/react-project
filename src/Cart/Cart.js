import React from "react";
import { useStateValue } from "../StateProvider";
import Header1 from "../Header1";
import CheckoutProduct from "../CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Cart.css";
// import { useRecoilValue } from "recoil";

// const Cart = () => {
//   return (
//     <table className="cart">
//       <thead>
//         <tr>
//           <th></th>
//           <th>Item</th>
//           <th>Price</th>
//           <th>Quantity</th>
//           <th>Total</th>
//         </tr>
//       </thead>
//       <tbody>
//         {cartItems.map((item) => (
//           <tr key={item.id}>
//             <td className="actions">
//               <CartButtons item={item} />
//             </td>
//             <td>{item.id}</td>
//             <td>{item.price}</td>
//             <td>{item.quantity}</td>
//             <td>${item.quantity * item.price}</td>
//           </tr>
//         ))}
//         <tr>
//           <td colSpan="4" style={{ textAlign: "right" }}>
//             Total:
//           </td>
//           <td>${totalCost}</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default Cart;

function Cart() {
	const [{ basket }] = useStateValue();
	return (
		<div>
			<div className="cart-div">
				<div className="cart-items">
					{/* <Header1></Header1> */}
					{basket?.length === 0 ? (
						<h3>No items in your cart</h3>
					) : (
						<div>
							<h2>You Cart</h2>
							{basket.map((item) => (
								<CheckoutProduct
									id={item.id}
									name={item.name}
									image={item.image}
									price={item.price}
									description={item.description}
									number={item.number}
								></CheckoutProduct>
							))}
						</div>
					)}
				</div>
				<div className="cart-subtotal">
					<Subtotal />
				</div>
			</div>
		</div>
	);
}

export default Cart;
