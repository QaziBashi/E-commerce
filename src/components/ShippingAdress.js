// import React from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";

// const ShippingAdress = () => {
//   return (
//     <>

//       {/* <div className="min-[360]:max-w-[550px] mx-auto p-[20px] bg-[#f5f2f2] rounded-xl"> */}
//         <form className="min-[360]:max-w-[550px] mx-auto p-[20px] bg-[#f5f2f2] rounded-xl">
//           <h1 className="text-2xl font-semibold">Shippping Adress</h1>

//           <div className=" pt-[20px] flex flex-wrap flex-col  gap-6">
//             <div className=" flex items-center flex-wrap  gap-6">
//               <input
//                 className=" flex-1 min-w-[200px] h-[30px] p-4 border-2 border-gray-400  rounded bg-transparent  outline-none"
//                 placeholder="First Name *"
//               />
//               <input
//                 className=" flex-1 min-w-[200px] h-[30px] border-2 border-gray-400 rounded bg-transparent p-4 outline-none"
//                 placeholder="Last Name *"
//               />
//             </div>

//             <input
//               className = "w-full max-[360px]:max-w-[200px] p-[5px] border-2 border-gray-400 rounded outline-none bg-transparent"
//               placeholder="City"
//             />

//             <div className=" flex flex-wrap gap-6">
//               <input
//                 className="flex-1 min-w-[200px] h-[30px] border-2 border-gray-400  rounded bg-transparent p-4 outline-none"
//                 placeholder="State *"
//               />
//               <input
//                 className="flex-1 min-w-[200px] h-[30px] border-2 border-gray-400  rounded bg-transparent p-4 outline-none"
//                 placeholder="Zip Code *"
//               />
//             </div>

//             <input
//               className=" max-[360px]:max-w-[100%]  border-2 border-gray-400  rounded outline-none bg-transparent p-[5px] "
//               placeholder="Phone *"
//             />

//             <textarea
//               className=" w-[100%] h-[150px] border-2 border-gray-400 rounded outline-none bg-transparent p-[5px]"
//               placeholder="Description"
//               type="text"
//             />
//           </div>
//         </form>
//       {/* </div> */}
//     </>
//   );
// };

// export default ShippingAdress;
import React from "react";

const ShippingAddress = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Shipping Address
      </h1>

      <form className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
          />
        </div>

        {/* City */}
        <input
          type="text"
          placeholder="City"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
        />

        {/* State + Zip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="State"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
          />
        </div>

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
        />

        {/* Address Description */}
        <textarea
          placeholder="Full Address / Notes"
          className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
        />

        {/* Submit Button */}
        <button className="w-full mt-4 py-3 text-white bg-green-500 hover:bg-green-600 transition rounded-lg font-semibold">
          Save Address
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
