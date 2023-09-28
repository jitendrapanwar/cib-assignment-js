import FinancialInstruments from './components/FinancialInstruments';
import './App.css';
import data from './fixtures/data.json'

function App() {
  return (
    <div className="app-container">
      <FinancialInstruments data={data} />
    </div>
  );
}

export default App;
