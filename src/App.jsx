import React, { useState } from 'react';
import { Menu, X, Home, ShoppingCart, BarChart, Settings, Sun, Moon } from 'react-feather'; // Importer les icônes de Feather Icons
import { Line } from 'react-chartjs-2'; // Importer le composant de graphique de lignes de Chart.js
import './app.css';
// import './charts.jsx'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // État pour le mode sombre

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}> {/* Appliquer le fond sombre ou clair et les couleurs de texte */}
      {/* Sidebar */}
      <div className={`w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'} ${isSidebarOpen ? '' : 'hidden'}`}>
        <div className="p-4 text-xl font-bold">Admin Dashboard</div>
        <nav>
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
        <div className={`p-4 border-b flex justify-between items-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}> {/* Appliquer le fond sombre ou clair */}
          {/* Bouton avec icônes pour ouvrir et fermer la barre latérale */}
          <button className="text-gray-500 focus:outline-none" onClick={toggleSidebar}>
            {isSidebarOpen ? <X /> : <Menu />}
            <span className="ml-2">{isSidebarOpen ? 'Fermer la barre latérale' : 'Ouvrir la barre latérale'}</span>
          </button>
          <h1 className="text-xl font-bold">React Admin Dashboard</h1>
          {/* Bouton pour changer entre le mode sombre et le mode lumière */}
          <button className="text-gray-500 focus:outline-none" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun /> : <Moon />}
            <span className="ml-2">{isDarkMode ? 'Mode Lumière' : 'Mode Sombre'}</span>
          </button>
        </div>
        {/* Dashboard Content */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Orders */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}> {/* Appliquer le fond sombre ou clair et les couleurs de texte */}
            <h2 className="text-xl font-semibold">Total Orders</h2>
            <p className="text-4xl font-bold">349</p>
          </div>
          {/* Total Products */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}> {/* Appliquer le fond sombre ou clair et les couleurs de texte */}
            <h2 className="text-xl font-semibold">Total Products</h2>
            <p className="text-4xl font-bold">25</p>
          </div>
          {/* Purchase Orders */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}> {/* Appliquer le fond sombre ou clair et les couleurs de texte */}
            <h2 className="text-xl font-semibold">Purchase Orders</h2>
            <p className="text-4xl font-bold">1500</p>
          </div>
          {/* Sales Orders */}
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}> {/* Appliquer le fond sombre ou clair et les couleurs de texte */}
            <h2 className="text-xl font-semibold">Sales Orders</h2>
            <p className="text-4xl font-bold">475</p>
          </div>
        </div>
        {/* Charts */}
        <div className="p-4">
          {/* Graphique de lignes */}
          <div className={`p-6 rounded-lg shadow-lg mb-4 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}> {/* Appliquer le fond sombre ou clair et les couleurs de texte */}
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
