// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import { useNavigate } from "react-router-dom";
// let Footer = () => {
//   const navigate = useNavigate();

//   const mencloth = () => {
//     navigate("/mencloth");
//   };

//   const menBag = () => {
//     navigate("/menBag");
//   };
//   const menshoes = () => {
//     navigate("/menShoe");
//   };
//   const WomenBags = () => {
//     navigate("/bags");
//   };
//   const womenshoes = () => {
//     navigate("/womenshoe");
//   };

//   return (
//     <>
//       <div className=" w-[100%] bg-[lightgray]">
//         <div className=" p-[40px] flex justify-between">
//           <div className=" flex start-0 flex-col gap-5">
//             <h3 className="text-xl font-semibold">Company Info</h3>
//             <p className="cursor-pointer">About Us</p>
//             <p className="cursor-pointer">Careers</p>
//             <p className="cursor-pointer">Press</p>
//             <p className="cursor-pointer">Blog</p>
//           </div>

//           <div className="flex start-0 flex-col gap-5">
//             <h3 className="text-xl font-semibold">Customer Service</h3>
//             <p className="cursor-pointer">Contact Us</p>
//             <p className="cursor-pointer">FAQs</p>
//             <p className="cursor-pointer">Shipping & Returns</p>
//             <p className="cursor-pointer">Secure Payment</p>
//             <p className="cursor-pointer">100% Authenticity</p>
//           </div>

//           <div className="flex start-0 flex-col gap-5">
//             <h3 className="text-xl font-semibold">Categories</h3>
//             <p className="cursor-pointer" onClick={mencloth}>
//               {" "}
//               Men’s Clothing
//             </p>
//             <p className="cursor-pointer" onClick={menBag}>
//               Men’s Bags
//             </p>
//             <p className="cursor-pointer" onClick={menshoes}>
//               Men’s Shoes
//             </p>
//             <p className="cursor-pointer" onClick={WomenBags}>
//               Women's Bags
//             </p>
//             <p className="cursor-pointer" onClick={womenshoes}>
//               {" "}
//               Women’s Shoes
//             </p>
//           </div>

//           <div className="flex start-0 flex-col gap-5">
//             <h3 className="text-xl font-semibold">Follow Us</h3>
//             <FontAwesomeIcon
//               className=" text-xl cursor-pointer"
//               icon={faTwitter}
//             />
//             <FontAwesomeIcon
//               className=" text-xl cursor-pointer"
//               icon={faFacebook}
//             />
//             <FontAwesomeIcon
//               className=" text-xl cursor-pointer"
//               icon={faInstagram}
//             />
//             <FontAwesomeIcon
//               className=" text-xl cursor-pointer"
//               icon={faYoutube}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

let Footer = () => {
  const navigate = useNavigate();

const mencloth = () => navigate("/mencloth");
  const menBag = () => navigate("/menBag");
  const menshoes = () => navigate("/menshoe");
  const WomenBags = () => navigate("/bags");
  const womenshoes = () => navigate("/womenshoe");

  return (
    <footer className="w-full bg-gray-100 text-gray-700">
   
      <div className="  m-[50px] flex justify-between  py-[50px] max-[360px]:flex-col  max-[360px]:gap-[20px] max-[50px]:py-[20px] text-center ">
        {/* max-w-7xl */}
       
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Company Info</h3>
          <p className="cursor-pointer hover:text-black">About Us</p>
          <p className="cursor-pointer hover:text-black">Careers</p>
          <p className="cursor-pointer hover:text-black">Press</p>
          <p className="cursor-pointer hover:text-black">Blog</p>
        </div>

        {/* Customer Service */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <p className="cursor-pointer hover:text-black">Contact Us</p>
          <p className="cursor-pointer hover:text-black">FAQs</p>
          <p className="cursor-pointer hover:text-black">Shipping & Returns</p>
          <p className="cursor-pointer hover:text-black">Secure Payment</p>
          <p className="cursor-pointer hover:text-black">100% Authenticity</p>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Categories</h3>
          <p className="cursor-pointer hover:text-black" onClick={mencloth}>
            Men’s Clothing
          </p>
          <p className="cursor-pointer hover:text-black" onClick={menBag}>
            Men’s Bags
          </p>
          <p className="cursor-pointer hover:text-black" onClick={menshoes}>
            Men’s Shoes
          </p>
          <p className="cursor-pointer hover:text-black" onClick={WomenBags}>
            Women's Bags
          </p>
          <p className="cursor-pointer hover:text-black" onClick={womenshoes}>
            Women’s Shoes
          </p>
        </div>

        {/* Follow Us */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <FontAwesomeIcon className="cursor-pointer hover:text-blue-500" icon={faTwitter} />
            <FontAwesomeIcon className="cursor-pointer hover:text-blue-700" icon={faFacebook} />
            <FontAwesomeIcon className="cursor-pointer hover:text-pink-500" icon={faInstagram} />
            <FontAwesomeIcon className="cursor-pointer hover:text-red-500" icon={faYoutube} />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500">
        © 2025 MyStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
