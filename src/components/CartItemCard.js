// import React, { useContext } from "react";
// import { ShopContext } from "../contexts/ShopContextProvider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCross, faTimes } from "@fortawesome/free-solid-svg-icons";
// export const CartItemCard = ({ data }) => {
//   const { id, imgUrl, productName, productPrice } = data;
//   const {
//     cartItems: cartItem,
//     increaseItem,
//     decreaseItem,
//     removeCart,
//     updateCartItemCount,
//   } = useContext(ShopContext);

//   const cleanPrice = Number(productPrice.replace(/[^0-9.-]+/g, ""));

//   const subtotal = cartItem[id] * cleanPrice;

//   return (
//     <>
//       <div className="bg-[#f5f2f2] min-[360px]:max-w-[900px] mx-auto p-5 min-[360px]:p-6 max-[360px]:m-4 mb-10 flex-start  ">
//         <FontAwesomeIcon
//           className=" top-0 right-0 cursor-pointer "
//           icon={faTimes}
//           onClick={() => removeCart(id)}
//         />

//         <div className="flex justify-between max-[360px]:flex-col max-[360px]:items-center min-[360px]:p-6  z-[10]  ">
//           <div className=" w-[180px] h-[180px] min-[360px]:w-[120px] min-[360px]:h-[120px] bg-[#efebeb] flex items-center justify-center">
//             <img
//               src={imgUrl}
//               className="w-[180px] h-[180px] object-cover min-[360px]:w-[140px] min-[360px]:h-[140px]"
//             ></img>
//           </div>

//           <div className=" flex flex-col gap-2">
//             <h3 className="font-semibold">{productName}</h3>
//             <p className="">{productPrice}</p>
//           </div>
//           <div className=" flex flex-col max-[360px]:flex-row gap-2 items-center">
//             <b>Quantity</b>
//             <div className=" ">
//               <button className="p-[5px]" onClick={() => decreaseItem(id)}>
//                 -
//               </button>
//               <input
//                 className=" w-[50px] h-[30px] mx-[5px] outline-none text-center"
//                 value={cartItem[id]}
//                 onChange={(e) =>
//                   updateCartItemCount(Number(e.target.value), id)
//                 }
//               />
//               <button className="p-[5px]" onClick={() => increaseItem(id)}>
//                 +
//               </button>
//             </div>
//           </div>

//           <div className="max-[360px]:flex gap-6 ">
//             <h3 className="font-semibold">Totall Amount :</h3>
//             <p>${subtotal}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartItemCard;
import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const CartItemCard = ({ data }) => {
  const { id, imgUrl, productName, productPrice } = data;

  const {
    cartItems,
    increaseItem,
    decreaseItem,
    removeCart,
    updateCartItemCount,
  } = useContext(ShopContext);

  const cleanPrice = Number(productPrice.replace(/[^0-9.-]+/g, ""));
  const subtotal = cartItems[id] * cleanPrice;

  return (
    <div className="relative w-full max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-5 mb-6 border border-gray-100 hover:shadow-lg transition z-0">
      {/* REMOVE BUTTON */}
      <button
        onClick={() => removeCart(id)}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      {/* IMAGE */}
      <div className="w-full sm:w-40 h-40 flex items-center justify-center bg-gray-50 rounded-xl">
        <img
          src={imgUrl}
          alt={productName}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* PRODUCT DETAILS */}
      <div className="flex-1 flex flex-col justify-between gap-3">
        {/* NAME + PRICE */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{productName}</h3>
          <p className="text-gray-500 mt-1">${cleanPrice}</p>
        </div>

        {/* QUANTITY CONTROLS */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600">Qty:</span>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              className="px-3 py-1 hover:bg-gray-100"
              onClick={() => decreaseItem(id)}
            >
              -
            </button>

            <input
              className="w-12 text-center outline-none"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />

            <button
              className="px-3 py-1 hover:bg-gray-100"
              onClick={() => increaseItem(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* TOTAL */}
      <div className="flex sm:flex-col justify-between sm:justify-center items-center sm:items-end gap-2">
        <p className="text-sm text-gray-500">Total</p>
        <p className="text-lg font-bold text-green-600">${subtotal}</p>
      </div>
    </div>
  );
};

export default CartItemCard;
