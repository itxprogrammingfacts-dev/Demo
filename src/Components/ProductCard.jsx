export default function ProductCard({ product }) {
  return (
    <div
      className="bg-white rounded-xl shadow-sm p-4 hover:shadow transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-32 mx-auto object-contain"
      />
      <h3 className="text-sm mt-3 line-clamp-2">
        {product.title}
      </h3>
      <p className="font-semibold mt-1">${product.price}</p>
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
        Add to cart
      </button>
    </div>
  );
}