import { Line } from 'react-chartjs-2';
// Définition des données pour le graphique de lignes
const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: '#4caf50', // Couleur de la ligne
        tension: 0.1, // Tension de la ligne
      },
    ],
  };
  
  // Options de configuration du graphique de lignes
const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };
  
