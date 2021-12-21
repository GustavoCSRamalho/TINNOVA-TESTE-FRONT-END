import Header from './Header'
import VehicleList from './VehicleList'
import SoldVehicles from './SoldVehicles'
import FabricanteList from './FabricanteList'
import UltimasSemanaCarros from './UltimaSemanaCarros'
import DecadeVehicles from './DecadeVehicles'

function Home() {
  return (
    <div className="App">
      <Header />
      <SoldVehicles />
      <DecadeVehicles />
      <UltimasSemanaCarros />
      <FabricanteList/>

      <VehicleList />

    </div>
  );
}

export default Home;
