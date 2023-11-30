"use client";
import { useCart } from "@/stores/cart-store";
import Link from "next/link";

const CartItems = () => {
const {products, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice, totalProducts} = useCart()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4"></h1>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">Cart</h2>
            {products && products.map((product) => (
              <div key={product.id} className="flex items-center mb-4">
                <div className="w-1/4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-3/4 ml-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold">{product.name}</p>
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded-full"
                      onClick={() => removeFromCart(product)}
                    >
                      Remove
                    </button>
                  </div>
                  <p className="mb-2">add product description here</p>
                  <p>Ksh {product.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-yellow-500 disabled:bg-yellow-500/40 rounded-full w-8 h-8 mr-2"
                      onClick={() =>
                        // updateQuantity(
                        //   product.id,
                        //   Math.max(product.quantity - 1, 1)
                        // )
                        decreaseQuantity(product)
                      }
                      disabled = {product.quantity === 1}
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button
                      className="bg-yellow-500 rounded-full w-8 h-8 ml-2"
                      onClick={() =>
                        // updateQuantity(product.id, product.quantity + 1)
                        increaseQuantity(product)

                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Cart</h2>
                <div>
                  <div className="text-lg font-semibold">
                    Total Items in Cart: {totalProducts}
                  </div>
                </div>
              </div>
              <div className="text-xl font-semibold mb-2">Total Price:</div>
              {/* <div>Ksh {calculateTotal(cartProducts).toFixed(2)}</div> */}
              <div>Ksh {totalPrice}</div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-black text-white px-4 py-2 rounded-full mr-64">
                <Link href="/signup">Check out</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
