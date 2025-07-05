import './App.css'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import ChartWidget from './components/ChartWidget';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
  datasets: [
    {
      label: 'Nombre total de malade',
      data: [30000, 40000, 100000, 250000, 300000],
      backgroundColor: 'rgba(192, 25, 25, 0.6)',
      borderRadius: 8,
      barThickness: 10,
      categoryPercentage: 0.5,
      barPercentage: 1.0,
    },
    {
      label: 'NB de dcd',
      data: [12000, 18000, 25000, 50000, 75000],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
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
      text: 'Subscribe of the week',
    },

  },
};

function App() {
  return (
      <div className="w-full overflow-x-auto">
        <ChartWidget data={data} options={options} />
      </div>

  );
}

export default App;
