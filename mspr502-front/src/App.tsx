import './App.css'
import LineChartNumberOfDeathByCountry from './components/BarChartNumberOfDeathByCountry';
import ButtonList from './components/ButtonList';
import GeoPropagationBar from './components/GeoPropagationBar';
import LineChartNumberOfDeathAndHealByDay from './components/LineChartNumberOfDeathByDay';
import { Chart, Filler } from 'chart.js';

Chart.register(Filler);

function App() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-col gap-6 p-4">
        <ButtonList />
        <LineChartNumberOfDeathByCountry />
        <LineChartNumberOfDeathAndHealByDay />
        <GeoPropagationBar />
      </div>
    </div>
  );
}

export default App;
