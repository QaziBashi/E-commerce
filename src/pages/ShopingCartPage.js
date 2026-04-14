// import { useNavigate } from "react-router-dom";
// import { ShopContext } from "../contexts/ShopContextProvider";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";

// import CartItemCard from "../components/CartItemCard";

// import React, { useContext } from "react";

// import { CombinedData } from "../DummyData/CombinedData";

// export const ShoppingCart = () => {
//   const navigate = useNavigate();
//   function shippingAdres() {
//     navigate("/shippingAdress");
//   }

//   const { cartItems: cartItem, gettotallCartAmount } = useContext(ShopContext);
//   const totallAmount = gettotallCartAmount();
//   return (
//     <>
//       <NavBar />
//       <h1 className="mt-[12vh] mb-[6vh] text-center text-4xl font-semibold">
//         Your Cart Items
//       </h1>
//       {/* <div className="cartItem"> */}
//       {CombinedData.map((product) => {
//         if (cartItem[product.id] > 0) {
//           return <CartItemCard key={product.id} data={product} />;
//         }
//       })}

//       <div className="min-[360px]:max-w-[900px] mx-auto flex justify-between max-[360px]:m-4 ">
//         <button className="chekOutBtn" onClick={shippingAdres}>
//           CheckOut
//         </button>

//         <span className=" flex  items-center gap-2">
//           <p className=" text-2xl max-[360px]:text-[18px] max-[360px]:font-normal font-medium">
//             Subtotall:
//           </p>
//           <p className="text-xl">${totallAmount}</p>
//         </span>
//       </div>
//       {/* </div> */}
//       <Footer />
//     </>
//   );
// };

// export default ShoppingCart;

// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { ShopContext } from "../contexts/ShopContextProvider";

// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import CartItemCard from "../components/CartItemCard";
// import { CombinedData } from "../DummyData/CombinedData";

// export const ShoppingCart = () => {
//   const navigate = useNavigate();

//   const { cartItems, gettotallCartAmount } = useContext(ShopContext);

//   const totallAmount = gettotallCartAmount();

//   const shippingAdres = () => {
//     navigate("/shippingAdress");
//   };

//   // FILTER CART ITEMS (clean approach)
//   const cartProducts = CombinedData.filter(
//     (product) => cartItems[product.id] > 0,
//   );

//   return (
//     <>
//       <div className=" z-100">
//         <NavBar />
//       </div>

//       {/* PAGE TITLE */}
//       <h1 className="mt-28 mb-10 text-center text-4xl font-bold text-gray-800">
//         Your Shopping Cart
//       </h1>

//       {/* EMPTY CART STATE */}
//       {cartProducts.length === 0 ? (
//         <div className="text-center text-gray-500 text-lg mb-20">
//           Your cart is empty 🛒
//         </div>
//       ) : (
//         <div className="px-4">
//           {cartProducts.map((product) => (
//             <CartItemCard key={product.id} data={product} />
//           ))}
//         </div>
//       )}

//       {/* SUMMARY SECTION */}
//       {cartProducts.length > 0 && (
//         <div className="w-full max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
//           {/* TOTAL */}
//           <div className="flex items-center gap-2">
//             <p className="text-lg font-medium text-gray-700">Subtotal:</p>
//             <p className="text-2xl font-bold text-green-600">${totallAmount}</p>
//           </div>

//           {/* CHECKOUT BUTTON */}
//           <button
//             onClick={shippingAdres}
//             className="w-full sm:w-auto px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// };

// export default ShoppingCart;

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ShopContext } from "../contexts/ShopContextProvider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CartItemCard from "../components/CartItemCard";
import { CombinedData } from "../DummyData/CombinedData";

export const ShoppingCart = () => {
  const navigate = useNavigate();

  const { cartItems, gettotallCartAmount } = useContext(ShopContext);

  const totalAmount = gettotallCartAmount();

  const shippingAdres = () => {
    navigate("/shippingAdress");
  };

  // FILTER CART ITEMS CLEANLY
  const cartProducts = CombinedData.filter(
    (product) => cartItems[product.id] > 0,
  );

  return (
    <>
      <NavBar />

{/* PAGE WRAPPER (IMPORTANT FOR FIXED NAVBAR) */}
      <main className="pt-24 min-h-screen bg-gray-50 relative z-0">
        {/* TITLE */}
        <h1 className="mb-10 text-center text-4xl font-bold text-gray-800">
          Your Shopping Cart
        </h1>

        {/* EMPTY STATE */}
        {cartProducts.length === 0 ? (
          <div className="text-center text-gray-500 text-lg mb-20">
            Your cart is empty 🛒
          </div>
        ) : (
          <div className="px-4 space-y-4">
            {cartProducts.map((product) => (
              <CartItemCard key={product.id} data={product} />
            ))}
          </div>
        )}

        {/* SUMMARY BOX */}
        {cartProducts.length > 0 && (
          <div className="w-full max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 z-0">
            {/* TOTAL */}
            <div className="flex items-center gap-2">
              <p className="text-lg font-medium text-gray-700">Subtotal:</p>
              <p className="text-2xl font-bold text-green-600">
                ${totalAmount}
              </p>
            </div>

            {/* CHECKOUT BUTTON */}
            <button
              onClick={shippingAdres}
              className="w-full sm:w-auto px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ShoppingCart;
