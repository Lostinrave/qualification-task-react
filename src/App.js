import "./App.css";
import { MDBNavbar, MDBNavbarItem } from "mdb-react-ui-kit";

import Form from "./components/Form";
import Table from "./components/Table";
import DetailsPage from "./components/DetailsPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MDBNavbar className="justify-content-start">
          <MDBNavbarItem className="list-unstyled mx-3">
            <Link className="text-dark" to="/">Home</Link>
          </MDBNavbarItem>
          <MDBNavbarItem className="list-unstyled">
            <Link className="text-dark" to="/new-record">Add record</Link>
          </MDBNavbarItem>
        </MDBNavbar>
        <Routes>
          <Route exact path="/" element={<Table />} />
          <Route exact path="/new-record" element={<Form />} />
          <Route
            exact
            path="/details-page/:id"
            element={<DetailsPage />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
