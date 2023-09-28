import IntrumentTable from './components/InstrumentTable';
import './App.css';
import data from './fixtures/data.json'

function App() {
  return (
    <div className="app-container">
      <IntrumentTable data={data} />
    </div>
  );
}

export default App;
