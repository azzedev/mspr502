import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', ],
  datasets: [
    {
      label: 'nombre de décès',
      data: [2, 14, 18, 22, 19],
      borderColor: 'rgba(148, 103, 189, 1)',
      backgroundColor: 'rgba(148, 103, 189, 0.2)',
      fill: true,
      tension: 0.4,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointStyle: 'circle'
    },
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Nombre de décès par jour',
    },
  },
  scales:{
        y:{
            min: 0,
            max: 30,
            title: {
                display: true,
                text: 'Nombre de décès par jour',
            }
        }
    }
};

function LineChartNumberOfDeathByDay() {
  return (
    <div className="bg-gray-50 shadow-2xl border-2 border-black rounded-3xl p-4 min-w-180 min-h-100">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChartNumberOfDeathByDay;
