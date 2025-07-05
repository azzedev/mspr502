import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartWidgetProps {
  data: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ data, options }) => {
  return (
    <div className="bg-amber-50 shadow-2xl border-2 border-black rounded-3xl p-4 min-w-180 min-h-100">
      <div className="w-full overflow-x-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartWidget;
