import { useEffect, useState } from "react";
import bannerImg from '../assets/banner.jpg';
import ProductCard from '../Components/ProductCard';

export default function EcommerceHome() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch products from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 pt-8">
      {/* MAIN GRID */}
      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-4 bg-white  ">
        {/* LEFT SIDEBAR */}
        <aside className="col-span-12 md:col-span-3 bg-white  shadow-sm p-4">
          <h3 className="font-semibold mb-3">All category</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((cat) => (
              <li
                key={cat}
                className="cursor-pointer hover:text-blue-600 transition"
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* HERO BANNER */}
        <div className="col-span-12 md:col-span-6 bg-blue-100  flex items-center p-6" style={{backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div>
            <h2 className="text-2xl font-bold text-white">Latest trending</h2>
            <h3 className="text-xl mb-4 text-white">Electronic items</h3>
            <button className="bg-white px-4 py-2 rounded shadow hover:bg-gray-100">
              Learn more
            </button>
          </div>
        </div>

        {/* USER BOX */}
        <aside className="col-span-12 md:col-span-3 space-y-4">
          <div className="bg-blue-100 rounded-xl shadow-sm p-4">
            <p className="font-medium">Hi, user</p>
            <p className="text-sm text-gray-500 mb-3">Let’s get started</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded mb-2">
              Join now
            </button>
            <button className="w-full border bg-white text-blue-400 py-2 rounded">Log in</button>
          </div>
          <div className="bg-orange-400 p-4 rounded-xl text-sm">
            Get US $10 off with a new supplier
          </div>
          <div className="bg-green-300 p-4 rounded-xl text-sm">
            Get US $10 off with a new supplier
          </div>
        </aside>
      </section>

  <br />

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-semibold mb-4">Deals and offers</h2>

        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* INQUIRY SECTION */}
      <section className="bg-blue-100 py-10 border rounded-xl  max-w-7xl mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              An easy way to send requests to all suppliers
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold mb-3">Send quote to suppliers</h3>
            <input
              className="w-full border rounded-lg px-3 py-2 mb-3"
              placeholder="What item you need"
            />
            <textarea
              className="w-full border rounded-lg px-3 py-2 mb-3"
              placeholder="Type more details"
            />

             <button className=" text-black font-bold px-20 py-2 pl-2 border rounded">
              Quantity
            </button> 
             <button className=" py-2  m-1  border rounded   ">
             <span className="text-black font-bold px-13  pl-2"> Pcs</span> <i className=" fa-solid fa-chevron-down text-xs pr-2"></i>
            </button> 
            <br />
            <button className="bg-blue-600 text-white mt-3 px-4 py-2 rounded">
              Send inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
