import React from "react";
import logos from "../assets/logos.png";

const Footer = () => {

  const countries = [
  { code: "PK", name: "Pakistan", flag: "https://flagcdn.com/w40/pk.png" },
  { code: "US", name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { code: "UK", name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "AE", name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
];


  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      {/* Subscribe */}
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h3 className="font-semibold text-lg mb-2">
          Subscribe on our newsletter
        </h3>
        <p className="text-gray-500 mb-4">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>

        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 w-64 border rounded"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Subscribe
          </button>
        </div>
      </div>

      {/* Links */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-6 gap-6">
          {/* Brand */}
          <div>

            <div className="flex justify gap-1.5">
           <img src={logos} alt="logo" className="w-12 h-10 pb-2.5 " />
          <div className="text-blue-300"> <h4 className="font-bold  ">Brand</h4>
          </div> </div>
            <p className="text-gray-500 mb-3">
              Best information about the company goes here but now lorem ipsum
              is
            </p>
            <div className="flex gap-3 text-xl">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-2">About</h4>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h4 className="font-semibold mb-2">Partnership</h4>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Find store</li>
              <li>Categories</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-2">Information</h4>
            <ul className="space-y-1">
              <li>Help Center</li>
              <li>Money Refund</li>
              <li>Shipping</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* For users */}
          <div>
            <h4 className="font-semibold mb-2">For users</h4>
            <ul className="space-y-1">
              <li>Login</li>
              <li>Register</li>
              <li>Settings</li>
              <li>My Orders</li>
            </ul>
          </div>
          {/* For users */}
         <div>
  <h4 className="font-semibold mb-3">Get App</h4>

  <div className="flex flex-col gap-3 text-decoration-none">
    {/* App Store */}
    <a
      href="#"
      className="flex items-center gap-3 bg-black text-white px-4 h-15 rounded-lg w-48 text-decoration-none"
    >
      <i className="fa-brands fa-apple text-4xl"></i>
      <div className="text-left  mt-3">
        <p className="text-xs">Download on the</p>
        <p className="text-sm font-semibold">App Store</p>
      </div>
    </a>

    {/* Google Play */}
    <a
      href="#"
      className="flex items-center gap-3 bg-black text-white px-4 h-15 rounded-lg w-48 text-decoration-none"
    >
      <i className="fa-brands fa-google-play text-3xl"></i>
      <div className="text-left  mt-3 ">
        <p className="text-xs">GET IT ON</p>
        <p className="text-sm font-semibold">Google Play</p>
      </div>
    </a>
  </div>
</div>

        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs">
          <span>© 2026 Ecommerce.</span>
          <span>English
            
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
