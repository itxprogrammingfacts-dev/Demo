export default function Messages() {
  const messages = [
    { id: 1, from: 'Supplier A', message: 'Your order has been shipped.', date: '2023-10-01' },
    { id: 2, from: 'Supplier B', message: 'We have a new product for you.', date: '2023-10-02' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-8">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Messages</h1>
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold">{msg.from}</h3>
              <p className="text-gray-600">{msg.message}</p>
              <p className="text-sm text-gray-400">{msg.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}