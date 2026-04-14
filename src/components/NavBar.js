import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Gucci1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faClose,
  faSearch,
  faPhone,
  faQuestionCircle,
  faShippingFast,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

let NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [PopUp, setPopUp] = useState(false);
  const [search, setSearch] = useState(false);
  const [contact, setContact] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = PopUp || search || contact ? "hidden" : "auto";
  }, [PopUp, search, contact]);

  const showContact = () => setContact(true);
  const hideContact = () => setContact(false);

  const showMenu = () => setPopUp(true);
  const hideMenu = () => setPopUp(false);

  const showSearch = () => setSearch(true);
  const hideSearch = () => setSearch(false);

  const navigateToCart = () => navigate("/cartComponent");
  const navigateToHome = () => {
    navigate("/homepage");
    hideMenu();
  };

  return (
    <>
      <div className="w-full fixed z-50 h-[10vh] flex items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg">
        <div className="flex justify-between items-center w-full px-8 max-md:px-4">
          <button
            onClick={showContact}
            className="text-sm font-medium hover:text-yellow-400 transition-colors duration-300"
          >
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-xs" />
              Contact
            </span>
          </button>

          <div
            className={`font-bold text-2xl tracking-wider cursor-pointer hover:text-yellow-400 transition-all duration-300 ${
              location.pathname === "/homepage"
                ? scrollPosition > 50
                  ? "scale-95"
                  : "scale-100"
                : "scale-95"
            }`}
          >
            LOUIS VUITTON
          </div>

          <div className="flex items-center gap-6 text-lg">
            <FontAwesomeIcon
              className="cursor-pointer hover:text-yellow-400 transition-transform duration-300 hover:scale-110"
              onClick={navigateToCart}
              icon={faCartShopping}
            />
            <FontAwesomeIcon
              className="cursor-pointer hover:text-yellow-400 transition-transform duration-300 hover:scale-110"
              onClick={showSearch}
              icon={faSearch}
            />
            <FontAwesomeIcon
              className="cursor-pointer hover:text-yellow-400 transition-transform duration-300 hover:scale-110"
              onClick={showMenu}
              icon={faBars}
            />
          </div>
        </div>
      </div>

      <div className="h-[10vh]" />

      {/* Menu Slide from Right */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          PopUp ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={hideMenu}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl transform transition-transform duration-500 ease-out ${
            PopUp ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-6">
            <button
              onClick={hideMenu}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faClose} className="text-xl" />
            </button>
          </div>

          <nav className="flex flex-col px-10 py-8 space-y-6">
            <h2 className="text-sm text-yellow-400 uppercase tracking-widest mb-4">
              Menu
            </h2>
            {[
              { label: "Home", action: navigateToHome },
              { label: "Our Products", action: hideMenu },
              { label: "Women", action: hideMenu },
              { label: "Men", action: hideMenu },
              { label: "Gifts", action: hideMenu },
              { label: "About Us", action: hideMenu },
            ].map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-left text-2xl font-light hover:text-yellow-400 transition-colors duration-300 py-2 border-b border-white/10"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-10 left-10 right-10">
            <p className="text-white/50 text-sm">Follow us on social</p>
          </div>
        </div>
      </div>

      {/* Search Slide from Right */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          search ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={hideSearch}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
            search ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-6">
            <button
              onClick={hideSearch}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faClose} className="text-xl" />
            </button>
          </div>

          <div className="px-8 py-4">
            <h2 className="text-sm text-yellow-600 uppercase tracking-widest mb-6">
              Search
            </h2>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full p-4 bg-slate-100 border-2 border-transparent focus:border-yellow-400 outline-none rounded-lg transition-all duration-300"
              autoFocus
            />

            <div className="mt-8">
              <p className="text-slate-500 text-sm mb-4">TRENDING SEARCHES</p>
              <div className="space-y-3">
                {["Watches", "Shoes", "Handbags", "Accessories"].map(
                  (item, index) => (
                    <button
                      key={index}
                      onClick={hideSearch}
                      className="flex items-center gap-3 text-slate-700 hover:text-yellow-600 transition-colors duration-300"
                    >
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="text-sm text-slate-400"
                      />
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Slide from Left */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          contact ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={hideContact}
        />
        <div
          className={`absolute top-0 left-0 h-full w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl transform transition-transform duration-500 ease-out ${
            contact ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-start p-6">
            <button
              onClick={hideContact}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faClose} className="text-xl" />
            </button>
          </div>

          <div className="px-10 py-8">
            <h2 className="text-sm text-yellow-400 uppercase tracking-widest mb-8">
              Client Services
            </h2>

            <p className="text-white/70 text-sm mb-8 leading-relaxed">
              Our Client Advisors are available to assist you with all your
              needs, from product information to order status and more.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-yellow-400 text-xl"
                />
                <div>
                  <p className="text-lg font-medium">+92 322 8530477</p>
                  <p className="text-white/50 text-sm">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="text-yellow-400 text-xl"
                />
                <div>
                  <p className="text-lg font-medium">Need Help?</p>
                  <p className="text-white/50 text-sm">FAQs & Support</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                <FontAwesomeIcon
                  icon={faShippingFast}
                  className="text-yellow-400 text-xl"
                />
                <div>
                  <p className="text-lg font-medium">Shipping & Returns</p>
                  <p className="text-white/50 text-sm">Track your order</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                <FontAwesomeIcon
                  icon={faStore}
                  className="text-yellow-400 text-xl"
                />
                <div>
                  <p className="text-lg font-medium">Find a Store</p>
                  <p className="text-white/50 text-sm">Locate near you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;