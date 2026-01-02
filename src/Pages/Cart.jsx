import { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, title: 'Product A', price: 10.99, quantity: 1, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product B', price: 15.99, quantity: 2, image: 'https://via.placeholder.com/150' },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return;
    setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 pt-8">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow p-4 flex items-center">
                <img src={item.image} alt={item.title} className="h-20 w-20 object-contain mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h2>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}