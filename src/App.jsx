import React, { useState } from 'react';
import { Menu, X, Home, ShoppingCart, BarChart, Settings } from 'react-feather'; // Importer les icônes de Feather Icons
import './app.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className={`w-64 bg-gray-800 ${isSidebarOpen ? '' : 'hidden'}`}>
        <div className="p-4 text-white text-xl font-bold">Admin Dashboard</div>
        <nav className="text-white">
          <ul className="mt-6">
            <li className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">
              <Home className="mr-2" />
              Home
            </li>
            <li className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">
              <ShoppingCart className="mr-2" />
              Orders
            </li>
            <li className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">
              <BarChart className="mr-2" />
              Reports
            </li>
            <li className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">
              <Settings className="mr-2" />
              Settings
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="p-4 bg-white border-b flex justify-between items-center">
          {/* Bouton avec icônes pour ouvrir et fermer la barre latérale */}
          <button className="text-gray-500 focus:outline-none" onClick={toggleSidebar}>
            {isSidebarOpen ? <X /> : <Menu />}
            <span className="ml-2">{isSidebarOpen ? 'Fermer la barre latérale' : 'Ouvrir la barre latérale'}</span>
          </button>
          <h1 className="text-xl font-bold text-gray-800">React Admin Dashboard</h1>
        </div>
        {/* Dashboard Content */}
        <div className="p-4">
          {/* Total Orders */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Total Orders</h2>
            {/* Placeholder for order count */}
            <p className="text-4xl font-bold text-gray-700">349</p>
          </div>
          {/* Total Products */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Total Products</h2>
            {/* Placeholder for product count */}
            <p className="text-4xl font-bold text-gray-700">25</p>
          </div>
          {/* Purchase and Sales Orders */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Purchase and Sales Orders</h2>
            {/* Placeholder for order charts */}
            <p className="text-gray-700">Charts will go here...</p>
          </div>
          {/* Top Products */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Top Products</h2>
            {/* Placeholder for top product list */}
            <p className="text-gray-700">Top products list will go here...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
