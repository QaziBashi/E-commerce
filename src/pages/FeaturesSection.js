import "../Style/Gucci1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheckDollar,
  faShield,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons/faHandHoldingDollar";

const FeaturesSection = () => {
  return (
    <>
      <div className="w-[100%] h-auto flex flex-col items-center">
        <div className="w-[100%] flex flex-col items-center m-[50px] px-[50px] gap-[70px]  max-[360px]:gap-[40px] max-[360px]:p-[25px]">
          <h1 className=" text-[36px] font-bold  max-[360px]:text-[25px]">
            Why Chose Us?
          </h1>
          <div className=" w-[100%] flex justify-between items-center max-[360px]:flex-col max-[360px]:gap-[20px]   text-3xl flex-wrap">
            <div className=" w-[200px] flex flex-col items-center gap-5 ">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #bfdde7 0%, #eaeaea 50%, #fdd3c3 100%)",
                }}
                className=" w-[100px] h-[100px] rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon id="icon" icon={faTruck} />
              </div>

              <div
                className="text-[18px] w-[200px] text-center"
                id="discription"
              >
                <h4 className=" text-xl font-semibold">Free Shipping</h4>
                <p>We deliver your products quickly with no extra charge.</p>
              </div>
            </div>
            <div className=" w-[200px] flex flex-col items-center gap-5">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #bfdde7 0%, #eaeaea 50%, #fdd3c3 100%)",
                }}
                className=" w-[100px] h-[100px] rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon id="icon" icon={faMoneyCheckDollar} />
              </div>

              <div
                id="discription"
                className="text-[18px] w-[200px] text-center"
              >
                <h4 className="text-xl font-semibold"> Secure Payment</h4>
                <p>Your transactions are encrypted and 100% secure.</p>
              </div>
            </div>
            <div className=" w-[200px] flex flex-col items-center gap-5">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #bfdde7 0%, #eaeaea 50%, #fdd3c3 100%)",
                }}
                className=" w-[100px] h-[100px] rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon id="icon" icon={faShield} />
              </div>

              <div
                id="discription"
                className="text-[18px] w-[200px] text-center"
              >
                <h4 className="text-xl font-semibold">100% Money Back</h4>
                <p>Get a full refund within 7 days if you're not satisfied.</p>
              </div>
            </div>
            <div className=" w-[200px] flex flex-col items-center gap-5">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #bfdde7 0%, #eaeaea 50%, #fdd3c3 100%)",
                }}
                className=" w-[100px] h-[100px] rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon id="icon" icon={faHandHoldingDollar} />
              </div>

              <div
                id="discription"
                className="text-[18px] w-[200px] text-center"
              >
                <h4 className="text-xl font-semibold"> 100% Authenticity</h4>
                <p>All our products are original and quality assured.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturesSection;
