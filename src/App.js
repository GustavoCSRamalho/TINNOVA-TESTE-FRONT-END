import './App.css';
import Home from './components/Home';
import EditVehicle from './components/EditVehicle'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditVehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
