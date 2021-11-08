import './App.css';
import Table from './components/Table';
import DetailsPage from './components/DetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Table/>}>
        
      </Route>
      </Routes>
    </div>
    </Router>
  );
}
function Home(){
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}
export default App;
