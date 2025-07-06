import './App.css'
import LineChartNumberOfDeathByCountry from './components/BarChartNumberOfDeathByCountry';
import LineChartNumberOfDeathByCase from './components/LineChartNumberOfDeathAndHealByDay';


function App() {
  return (
      <div className="w-full overflow-x-auto">
        <div className='mb-4'>
          <LineChartNumberOfDeathByCountry/>
        </div>
        <div>
        <LineChartNumberOfDeathByCase/>
        </div>
      </div>

  );
}

export default App;
