// import React from "react";

// const PaymentMethod = () => {
//   return (
//     <div className=" min-[360px]:max-w-[550px] mx-auto  p-[20px] bg-[#f5f2f2] rounded-xl">
//     {/* // <div className="w-full max-w-[550px] p-5 bg-[#f5f2f2] rounded-xl"> */}

//       <div className=" flex flex-col items-center gap-7">
//         <h1 className=" text-2xl font-semibold">Add Payment Method</h1>

//         <div className=" flex min-w-[80%] items-center justify-between flex-wrap">
//           <img className=" w-[50px] cursor-pointer" src="/Images/visa.png" />
//           <img
//             className="w-[70px] cursor-pointer"
//             src="/Images/master card.png"
//           />
//           <img
//             className=" w-[60px] h-[30px] cursor-pointer"
//             src="/Images/discover.png"
//           />
//           <img
//             className=" w[100px] h-[30px] cursor-pointer"
//             src="/Images/paypal1.png"
//           />
//         </div>
//       </div>

//       <div className=" flex flex-col gap-5 mt-[20px]">
//         <input
//           className=" w-[100%]  border-2 border-gray-400  rounded outline-none bg-transparent p-[5px] "
//           placeholder="Card Holder's Name *"
//         />
//         <input
//           className=" flex-1 min-w-[200px]  border-2 border-gray-400  rounded outline-none bg-transparent p-[5px] "
//           placeholder="Card Number *"
//         />

//         <div className=" flex flex-wrap gap-7">
//           <input
//             className="flex-1 min-w-[200px] h-[30px] p-4 border-2 border-gray-400  rounded bg-transparent  outline-none"
//             placeholder="Expiration Year *"
//           />
//           <input
//             className="flex-1 min-w-[200px] h-[30px] p-4 border-2 border-gray-400  rounded bg-transparent  outline-none"
//             placeholder="Expiration Month *"
//           />
//         </div>

//         <input
//           className=" w-[100%]  border-2 border-gray-400  rounded outline-none bg-transparent p-[5px] "
//           placeholder="CVV *"
//         />

//         <button className=" mt-5 py-3 px-8 text-center text-white bg-[#5e3c2c] flex m-auto rounded-lg">
//           CONFIRM PAYMENT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentMethod;
import React from "react";

const PaymentMethod = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Add Payment Method
      </h1>

      {/* Payment Icons */}
      <div className="flex justify-between items-center gap-4 mb-6">
        <img
          className="w-12 cursor-pointer hover:scale-110 transition"
          src="/Images/visa.png"
          alt="visa"
        />
        <img
          className="w-16 cursor-pointer hover:scale-110 transition"
          src="/Images/master card.png"
          alt="mastercard"
        />
        <img
          className="w-14 cursor-pointer hover:scale-110 transition"
          src="/Images/discover.png"
          alt="discover"
        />
        <img
          className="w-20 cursor-pointer hover:scale-110 transition"
          src="/Images/paypal1.png"
          alt="paypal"
        />
      </div>

      {/* Form */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Card Holder Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
        />

        <input
          type="text"
          placeholder="Card Number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
        />

        {/* Expiry Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
          />

          <input
            type="text"
            placeholder="CVV"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
          />
        </div>

        {/* Button */}
        <button className="w-full mt-4 py-3 text-white bg-green-500 hover:bg-green-600 transition rounded-lg font-semibold">
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
