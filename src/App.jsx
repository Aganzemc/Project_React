import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaGoogle, FaFacebook, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Menu, X, Home, ShoppingCart, BarChart, Settings, Sun, Moon } from 'react-feather'; // Importer les icônes de Feather Icons
import { Line } from 'react-chartjs-2'; // Importer le composant de graphique de lignes de Chart.js
import './app.css';
import { FaBullseye } from 'react-icons/fa6';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // État pour le mode sombre
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    // Logique de déconnexion ici
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Sidebar */}
      <div className={`w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'} ${isSidebarOpen ? '' : 'hidden'}`}>
        <div className="p-4 text-xl font-bold">Admin Dashboard</div>
        <nav>
          <ul className="mt-6">
            <li className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">
              {isSidebarOpen ? <Home className="mr-2" /> : <Home className="mr-2 opacity-0" />}
              <span>{isSidebarOpen && 'Home'}</span>
            </li>
            <li className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">
              {isSidebarOpen ? <ShoppingCart className="mr-2" /> : <ShoppingCart className="mr-2 opacity-0" />}
              <span>{isSidebarOpen && 'Orders'}</span>
            </li>
            <li className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">
              {isSidebarOpen ? <BarChart className="mr-2" /> : <BarChart className="mr-2 opacity-0" />}
              <span>{isSidebarOpen && 'Reports'}</span>
            </li>
            <li className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-700">
              {isSidebarOpen ? <Settings className="mr-2" /> : <Settings className="mr-2 opacity-0" />}
              <span>{isSidebarOpen && 'Settings'}</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className={`p-4 border-b flex justify-between items-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Bouton avec icônes pour ouvrir et fermer la barre latérale */}
          <button className="text-gray-500 focus:outline-none" onClick={toggleSidebar}>
            {isSidebarOpen ? <X /> : <Menu />}
            <span className="ml-2">{isSidebarOpen ? 'Fermer la barre latérale' : 'Ouvrir la barre latérale'}</span>
          </button>
          <h1 className="text-xl font-bold">React Admin Dashboard</h1>
          <div className="flex justify-end items-center">
            <FaGithub className={`ml-6 hover:text-gray-700 cursor-pointer ${isDarkMode ? 'h-6 w-6' : 'h-6 w-6'}`} />
            <FaFacebook className={`ml-6 text-blue-700 hover:text-gray-700 cursor-pointer ${isDarkMode ? 'h-6 w-6' : 'h-6 w-6'}`} />
            <FaInstagram className={`ml-6 text-red-200 hover:text-gray-700 cursor-pointer ${isDarkMode ? 'h-6 w-6' : 'h-6 w-6'}`} />
            <FaGoogle className={`ml-6 text-red-200 hover:text-gray-700 cursor-pointer ${isDarkMode ? 'h-6 w-6' : 'h-6 w-6'}`} />
            <div className="relative ml-6">
              <FaUser className={`text-gray-00 hover:text-gray-700 cursor-pointer ${isDarkMode ? 'h-6 w-6' : 'h-6 w-6'}`} onClick={toggleProfile} />
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => console.log('Profile clicked')}>
                    Profile
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
           
            <button onClick={toggleDarkMode} className="ml-6 text-blue-500 dark:text-blue-300 flex items-center space-x-2">
              {isDarkMode ? <Sun /> : <Moon />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
          </div>
        </div>
        {/* Dashboard Content */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Orders */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-xl font-semibold">Total Orders</h2>
            <p className="text-4xl font-bold">349</p>
          </div>
          {/* Total Products */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-xl font-semibold">Total Products</h2>
            <p className="text-4xl font-bold">25</p>
          </div>
          {/* Purchase Orders */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-xl font-semibold">Purchase Orders</h2>
            <p className="text-4xl font-bold">1500</p>
          </div>
          {/* Sales Orders */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-xl font-semibold">Sales Orders</h2>
            <p className="text-4xl font-bold">475</p>
          </div>
        </div>
        {/* Charts */}
        <div className="p-4">
          {/* Graphique de lignes */}
          <div className={`p-6 rounded-lg shadow-lg mb-4 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-xl font-semibold">Sales Trends</h2>
            <div className="mt-4">
              {/* <Line data={lineChartData} options={lineChartOptions} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
