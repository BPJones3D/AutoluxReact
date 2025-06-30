import './App.css';
import Banner from './components/Banner'
import CarList from './components/CarList';
import FilterMenu from './components/FilterSystem/FilterMenu';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <>
      <div className="header">
        <Banner/>
        <NavMenu/>
      </div>
      <div className="main-content">
        <FilterMenu/>
        <CarList/>
      </div>
    </>
  );
}

export default App;
