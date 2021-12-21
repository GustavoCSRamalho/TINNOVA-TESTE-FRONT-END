import Header from './Header'
import VehicleList from './VehicleList'
import SoldVehicles from './SoldVehicles'
import FabricanteList from './FabricanteList'
import UltimasSemanaCarros from './UltimaSemanaCarros'


function Home() {
  return (
    <div className="App">
      <Header />
      <SoldVehicles />
      <UltimasSemanaCarros />
      <FabricanteList/>

      <VehicleList />

    </div>
  );
}

export default Home;
