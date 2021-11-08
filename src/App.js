import './App.css';
import Table from './components/Table';
import DetailsPage from './components/DetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Table/>}>
      </Route>
      <Route exact path="/details-page/:id" element={<DetailsPage/>}>
      </Route>
      </Routes>
    </div>
    </Router>
  );
}


export default App;
