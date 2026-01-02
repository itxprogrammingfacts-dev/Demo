import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logos from "../assets/logos.png";

const Navbar = () => {
  const [catOpen, setCatOpen] = useState(false);
  const [shipOpen, setShipOpen] = useState(false);
  const countries = [
  { code: "PK", name: "Pakistan", flag: "https://flagcdn.com/w40/pk.png" },
  { code: "US", name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { code: "UK", name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "AE", name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
];
const [selected, setSelected] = useState(countries[0]);

  const languages = [
    { code: "en", name: "English" },
    { code: "ur", name: "Urdu" },
    { code: "zh", name: "Chinese" },
    { code: "hi", name: "Hindi" },
  ];
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [langOpen, setLangOpen] = useState(false);

  const categories = [
    { id: 0, name: "All Categories" },
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Home & Garden" },
    { id: 4, name: "Sports" },
  ];
  const [selectedCat, setSelectedCat] = useState(categories[0]);

  const catRef = useRef(null);
  const shipRef = useRef(null);
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (catRef.current && !catRef.current.contains(event.target)) {
        setCatOpen(false);
      }
      if (shipRef.current && !shipRef.current.contains(event.target)) {
        setShipOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <>
      <div className="navbar bg-white shadow flex justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center text-decoration-none space-x-2">
          <img src={logos} alt="logo" className="w-12 h-10" />
          <div className="text-2xl font-bold text-blue-300 hidden sm:block">
            Raufee
          </div>
        </Link>

        {/* Search + Dropdown */}
        <div className="flex items-center border-2 border-blue-500 rounded-xl bg-white overflow-hidden relative">
          <input
            type="text"
            placeholder="Search"
            className="input border-none pl-5 py-2 input-sm w-32 md:w-64 lg:w-96 bg-transparent text-black focus:outline-none"
          />

          {/* Dropdown */}
          <div className="relative" ref={catRef}>
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center gap-2 px-3 py-2 text-black bg-transparent border-l-2 border-blue-500 hover:bg-gray-100 focus:outline-none"
            >
              {selectedCat.name}
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </button>

            {catOpen && (
              <ul className="absolute right-0 top-full mt-1 w-48 bg-white text-black border-2 border-blue-500 rounded shadow-md z-50">
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    onClick={() => {
                      setSelectedCat(cat);
                      setCatOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {cat.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 focus:outline-none  rounded-r-xl">
            Search
          </button>
        </div>
        <div className="flex pag items-center gap-4 text-black">
          {/* User */}
          <Link to="/profile" className="flex flex-col items-center text-sm normal-case text-decoration-none group">
            <i className="fa-regular fa-user text-lg text-black group-hover:text-blue-600"></i>
            <span className="text-black group-hover:text-blue-600">profile</span>
          </Link>

          <Link to="/messages" className="flex flex-col items-center text-sm normal-case text-decoration-none group">
            <i className="fa-regular fa-message text-black group-hover:text-blue-600"></i>
            <span className="text-black group-hover:text-blue-600">Message</span>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" className="flex  flex-col items-center text-sm normal-case text-decoration-none group">
            <i className="fa-regular fa-heart text-black group-hover:text-blue-600"></i>
            <span className="text-black group-hover:text-blue-600">Wishlist</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="flex flex-col items-center text-sm normal-case relative text-decoration-none group">
            <i className="fa-solid fa-cart-shopping text-black group-hover:text-blue-600"></i>
            <span className="text-black group-hover:text-blue-600">Cart</span>
            <span className="absolute -top-2 -right-2  text-xs px-1 rounded-full">
             
            </span>
          </Link>
        </div>
      </div> 
      <div className="bg-white-100 shadow px-4 py-2">
        <div className="flex gap-6 text-sm text-gray-700">
          <button className="font-semibold hover:text-blue-600">
            <i className="fa-solid fa-bars"> </i>
            <span> All category</span>
          </button>
          <button className="hover:text-blue-600  font-semibold">
            Hot offers
          </button>
          <button className="hover:text-blue-600 font-semibold">
            Gift boxes
          </button>
          <button className="hover:text-blue-600 font-semibold">
            Projects
          </button>
          <button className="hover:text-blue-600 font-semibold">
            Menu item
          </button>
          <button className="hover:text-blue-600 font-semibold">Help <i className="fa-solid fa-chevron-down text-xs"></i></button>


            <div className="ml-auto font-semibold flex items-center gap-4">
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="text-sm hover:text-gray-300 flex items-center gap-1"
                >
                  {selectedLang.name}, USD
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </button>
                {langOpen && (
                  <ul className="absolute right-0 mt-2 w-32 bg-white border rounded shadow">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {lang.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative" ref={shipRef}>
            <button
              onClick={() => setShipOpen(!shipOpen)}
              className="flex items-center gap-2"
            >
              Ship to
              <img src={selected.flag} alt={selected.name} className="w-5 h-3" />
              <i className="fa-solid fa-angle-down text-xs"></i>
            </button>
             {shipOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
                {countries.map((c) => (
                  <li
                    key={c.code}
                    onClick={() => {
                      setSelected(c);
                      setShipOpen(false);
                    }}
                    className="flex gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img src={c.flag} alt={c.name} className="w-5 h-3" />
                    {c.name}
                  </li>
                ))}
              </ul>
            )}
          </div> 
          </div>

            




        </div>
      </div>
    </>
  );
};

export default Navbar;
