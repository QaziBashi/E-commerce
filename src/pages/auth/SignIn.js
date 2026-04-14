import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/Gucci1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SignIn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = (e) => {
    e.preventDefault();
    let loggedUser = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = loggedUser.find(
      (user) =>
        user.email.toLowerCase() === input.email.toLowerCase() &&
        user.password === input.password
    );

    if (foundUser) {
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
      navigate("/homepage");
    } else {
      alert("Invailed Input");
      return;
    }
  };

  const signUpPage = () => {
    navigate("/signup");
  };

  const nevigatetoSignUp = () => {
    navigate("/signup");
  };
  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users"));
    if (!existingUsers || existingUsers.length === 0) {
      const defaultUsers = [
        {
          name: "Qazi Bashi",
          email: "qazibashi@gmail.com",
          password: "1234",
        },
        {
          name: "Mubashir Hussain",
          email: "mubashirhussain@gmail.com",
          password: "abcd",
        },
      ];
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  }, []);
  return (
    <div className=" w-[100% ] h-[100vh] flex items-center justify-center bg-[linear-gradient(135deg,_#bfd2e3,_#e8dad3,_#f4d3c0)]">
      <div className="w-[1100px] max-[360px]:w-[360px] h-[600px] bg-white rounded-[15px]">
        <div className=" flex justify-between max-[360px]:justify-center items-center h-[100%]">
          <div className=" w-[500px] h-[500px] max-[360px]:w-[300px] flex flex-col gap-7 p-5 items-center ">
            <h1 className=" text-center text-4xl font-bold">LOGIN</h1>

            <div className=" flex justify-between gap-8">
              <div className=" w-[40px] h-[40px] rounded-md border-[3px] border-black flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon className="text-[20px]" icon={faGooglePlusG} />
              </div>
              <div className=" w-[40px] h-[40px] rounded-md border-[3px] border-black flex items-center justify-center cursor-pointer ">
                <FontAwesomeIcon className="text-[20px]" icon={faFacebook} />
              </div>
              <div className=" w-[40px] h-[40px] rounded-md border-[3px] border-black flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon className="text-[20px]" icon={faGithub} />
              </div>
              <div className=" w-[40px] h-[40px] rounded-md border-[3px] border-black flex items-center justify-center cursor-pointer ">
                <FontAwesomeIcon className="text-[20px]" icon={faLinkedinIn} />
              </div>
            </div>
            <form
              className=" mt-7 flex flex-col justify-center items-center gap-4 max-[360px]:w-[300px]"
              onSubmit={handleLogIn}
              autoComplete="off"
            >
              <div className="user-Email">
                <input
                  name="email"
                  autoComplete="off"
                  value={input.email}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  type="email"
                  placeholder="Email"
                  className="flex w-96 max-[360px]:w-[270px] max-[300px]:pl-[0px] h-9 pl-2 rounded  bg-[#e4e4e4] outline-none"
                />
              </div>
              <div className="user-Password">
                <input
                  name="password"
                  autoComplete="new-password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                  type="password"
                  placeholder="Password"
                  className="flex w-96 max-[360px]:w-[270px] h-9 pl-2 rounded bg-[#e4e4e4] outline-none"
                />
              </div>

              <button
                style={{ marginTop: "58px" }}
                className="button"
                type="submit"
              >
                login
              </button>
            </form>

            <button
              className="buttonn"
              // className=" hidden max-[360px]:block"
              onClick={nevigatetoSignUp}
            >
              SignUp
            </button>
          </div>
          {/* <div className=" w-[500px] h-[600px] bg-red-800"></div> */}

          {/* SECOND DIV FOR SIGN UP */}
          <div className=" max-[360px]:hidden w-1/2 bg-[#9c786c] rounded-l-full h-full flex items-center justify-center ">
            <div className=" flex flex-col gap-7 w-[350px] items-center">
              <h1 className=" flex m-auto text-4xl">
                Welcome To 𝑳𝑽
                {/* Louis Vuitton */}
              </h1>
              <p className=" text-[18px]">
                Welcome to ꪶꪮꪊⅈડ ꪜꪊⅈ𝕥𝕥ꪮꪀ, where elegance meets innovation. This
                isn't just a platform — it's a lifestyle. Step into a space
                where your identity shines, your style speaks, and every detail
                reflects sophistication.
              </p>
              <button
                className=" text-[1.4rem] text-white font-[700] py-2 px-10 rounded-lg bg-[#5e3c2c] outline-none"
                onClick={signUpPage}
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
