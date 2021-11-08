import './App.css';
import Table from './components/Table';
import DetailsPage from './components/DetailsPage';
import { Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <Route path="/table">
          <Table />
        </Route>
      </div>
  );
}

export default App;
