import './App.css';
import Home from './components/Home';
import EditVehicle from './components/EditVehicle'
import AddVehicle from './components/AddVehicle'
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
        <Route path="/adicionar" element={<AddVehicle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
