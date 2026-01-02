import { useState } from 'react';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([
    { id: 1, title: 'Product A', price: 10.99, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product B', price: 15.99, image: 'https://via.placeholder.com/150' },
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-8">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishlist.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow p-4">
                <img src={item.image} alt={item.title} className="h-32 mx-auto object-contain" />
                <h3 className="text-sm mt-3">{item.title}</h3>
                <p className="font-semibold mt-1">${item.price}</p>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="mt-3 w-full bg-red-600 text-white py-2 rounded-lg text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}