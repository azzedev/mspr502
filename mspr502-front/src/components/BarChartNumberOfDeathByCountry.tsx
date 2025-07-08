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
      label: 'Taux de transmition',
      data: [1.2, 1.1, 1.4, 3, 2.4],
      backgroundColor: 'rgba(148, 103, 189, 1)',
      borderRadius: 8,
      barThickness: 10,
      categoryPercentage: 0.5,
      barPercentage: 1.0,
    }
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
      text: 'Taux de transmission par pays',
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
