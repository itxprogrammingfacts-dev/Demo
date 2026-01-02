export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 pt-8">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Phone: +1234567890</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}