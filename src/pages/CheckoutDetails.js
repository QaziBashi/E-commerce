import React from "react";
import ShippingAdress from "../components/ShippingAdress";
import PaymentMethod from "../components/PaymentMethod";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const CheckoutDetails = () => {
  return (
    <>
    <NavBar/>
    <div className=" min-[360px]:max-w-full flex flex-col justify-center items-center mt-[100px] mx-[20px] gap-7">
      <h1 className=" text-center text-4xl font-semibold ">
        Shipping & Payment Details
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 w-full max-[360px]:m-4">

        <  ShippingAdress/>
        <PaymentMethod />
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default CheckoutDetails;
