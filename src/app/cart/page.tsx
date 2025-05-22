'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  _id: string;
  title: string;
  price: number;
  quantity: number;
}

function Cart() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    const items: Product[] = Object.values(cart);
    setProducts(items);
  }, []);

  const removeItem = (id: string) => {
    const updatedCart = products.filter(item => item._id !== id);
    setProducts(updatedCart);

    if (updatedCart.length === 0) {
      localStorage.removeItem("cart");
    } else {
      const updatedCartObj = Object.fromEntries(
        updatedCart.map(item => [item._id, item])
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartObj));
    }

    toast.error("Item removed successfully", {
      position: "bottom-right",
      autoClose: 3000,
      transition: Bounce,
    });
  };

  const proceedToCheckout = () => {
    if (products.length > 0) {
      localStorage.setItem("order", JSON.stringify(products));
      localStorage.removeItem("cart");
      router.push("/checkout");
    }
  };

  const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">🛒 Your Cart</h1>
        
        <div className="space-y-4">
          {products.map(item => (
            <div key={item._id} className="p-4 flex justify-between items-center border-b flex-wrap gap-4">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-[#24224f]">Price: PKR {item.price}</p>
                <p className="text-[#24224f]">Quantity: {item.quantity}</p>
                <p className="text-[#24224f] font-bold">
                  Subtotal: PKR {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div>
                <button
                  onClick={() => removeItem(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length > 0 ? (
          <div className="mt-6 flex justify-between items-center border-t pt-4 flex-wrap gap-4">
            <h2 className="text-xl font-bold">Total: PKR {total.toFixed(2)}</h2>
            <button
              onClick={proceedToCheckout}
              className="bg-[#24224f] hover:bg-[#8BD5FF] text-white px-6 py-2 rounded-xl"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Cart;
