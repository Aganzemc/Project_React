// App.jsx
import React from 'react';
import './app.css';

function App() {
  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800">
        <div className="p-4 text-white text-xl font-bold">Admin Dashboard</div>
        <nav className="text-white">
          <ul className="mt-6">
            <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">Home</li>
            <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">Orders</li>
            <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">Reports</li>
            <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">Settings</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="p-4 bg-white border-b">
          <h1 className="text-xl font-bold text-gray-800">Responsive Sidebar & Navbar</h1>
          <p className="text-sm text-gray-600">React & Tailwind</p>
        </div>
        {/* Content Goes Here */}
      </div>
    </div>
  );
}

export default App;
