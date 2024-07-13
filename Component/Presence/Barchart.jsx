// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Second', 'Premiere', 'Terminal'],
    datasets: [
      {
        label: 'Taux d\'absence',
        data: [12, 19, 3], // Exemple de données
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Taux d\'absence par niveau',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
