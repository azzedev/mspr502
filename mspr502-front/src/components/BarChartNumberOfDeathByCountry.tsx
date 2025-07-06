import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['USA', 'France', 'Espagne', 'Russie', 'Chine'],
  datasets: [
    {
      label: 'Nombre total de malade',
      data: [30000, 40000, 100000, 250000, 300000],
      backgroundColor: '#1f77b4',
      borderRadius: 8,
      barThickness: 10,
      categoryPercentage: 0.5,
      barPercentage: 1.0,
    },
    {
      label: 'NB de décès',
      data: [12000, 18000, 25000, 50000, 75000],
      backgroundColor: '#ff7f0e',
      borderRadius: 8,
      barThickness: 10,
      categoryPercentage: 0.5,
      barPercentage: 1.0,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Nombre de décès par cas total',
    },

  },
};

const LineChartNumberOfDeathByCountry: React.FC = () => {
  return (
    <div className="bg-gray-50 shadow-2xl border-2 border-black rounded-3xl p-4 min-w-180 min-h-100">
      <div className="w-full overflow-x-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChartNumberOfDeathByCountry;
