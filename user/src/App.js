import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Showuser from './Components/Showuser';
import Bookemark from './Components/Bookemark';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Showuser />} />
          <Route exact path="/bookmark/:id" element={<Bookemark  />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
