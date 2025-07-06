import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', ],
  datasets: [
    {
      label: 'nombre de décès',
      data: [2, 14, 18, 22, 19],
      borderColor: '#1f77b4',
      backgroundColor: 'rgba(31, 119, 180, 0.2)',
      fill: true,
      tension: 0.4,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointStyle: 'circle'
    },
    {
      label: 'Nombre de guéries',
      data: [5, 10, 12, 13, 15],
      borderColor: '#ff7f0e',
      backgroundColor: 'rgba(255, 127, 14, 0.2)',
      fill: true,
      tension: 0.4,
      pointRadius: 6,
      pointHoverRadius: 8,
      pointStyle: 'rectRot'
    }
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
      text: 'Nombre de décès par cas total',
    },
  },
  scales:{
        y:{
            min: 0,
            max: 30,
            title: {
                display: true,
                text: 'Nombre de cas confirmés',
            }
        }
    }
};

function LineChartNumberOfDeathAndHealByDay() {
  return (
    <div className="bg-gray-50 shadow-2xl border-2 border-black rounded-3xl p-4 max-w-3xl mx-auto">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChartNumberOfDeathAndHealByDay;
