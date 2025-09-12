import './App.css';
import Banner from './components/Banner'
import CarList from './components/CarList';
import FilterMenu from './components/FilterSystem/FilterMenu';
import NavMenu from './components/NavMenu';
import CarDetailsPage from './components/CarDetailsPage';
import AdminPage from './components/admin/AdminPage';
import { useEffect, useState, use } from 'react';
import EditCarPage from './components/admin/EditCarPage';
import NewCarPage from './components/admin/NewCarPage';
import AdminLoginPage from './components/admin/AdminLoginPage';


const url = "https://localhost:44357/";

/* 
todo list
----------
search name
search id

*/




function App() {
  const [fetchedCars, setFetchedCars] = useState([]);
  const [bearerToken, setBearerToken] = useState("")

  function checkToken(token){
    if(token != "")
      {
        setBearerToken(token)
        setIsLoggedIn(true)
        setCarClicked()
        setPageValue("admin")
      }
    else
      {
        console.log("token wrong: " + token)
      }
  }

  const newFetchCars = async () => {
    const newfetchedCars = await 
      fetch(url + "api/car", 
        {
          method: 'GET',
        })
      .then(response => response.json());
    setFetchedCars(newfetchedCars)
  }

  const [sortByValue, setSortByValue] = useState("Relevancy");
  const [orderValue, setOrderValue] = useState(true);
  const [searchValue, setSearchNameValue] = useState("");
  const [yearMinValue, setYearMinValue] = useState(0);
  const [yearMaxValue, setYearMaxValue] = useState(1000000);
  const [priceMinValue, setPriceMinValue] = useState(0);
  const [priceMaxValue, setPriceMaxValue] = useState(1000000);
  const [milesMinValue, setMilesMinValue] = useState(0);
  const [milesMaxValue, setMilesMaxValue] = useState(1000000);
  const [mpgMinValue, setMpgMinValue] = useState(0);
  const [mpgMaxValue, setMpgMaxValue] = useState(1000000);
  const [tankCapacityMinValue, setTankCapacityMinValue] = useState(0);
  const [tankCapacityMaxValue, setTankCapacityMaxValue] = useState(1000000);
  const [evRangeMinValue, setEvRangeMinValue] = useState(0);
  const [evRangeMaxValue, setEvRangeMaxValue] = useState(1000000);
  const [seatsMinValue, setSeatsMinValue] = useState(0);
  const [seatsMaxValue, setSeatsMaxValue] = useState(1000000);
  const [doorsMinValue, setDoorsMinValue] = useState(0);
  const [doorsMaxValue, setDoorsMaxValue] = useState(1000000);
  const [fuelTypeValue, setFuelTypeValue] = useState([])
  const [transmissionValue, setTransmissionValue] = useState([])
  const [brandValue, setBrandValue] = useState([])

  const sortByChange              = (newSortBy)      => {setSortByValue(newSortBy)};
  const orderChange               = (newOrder)       => {setOrderValue(newOrder)};
  const searchNameChange          = (newSearchName)  => {setSearchNameValue(newSearchName)};
  const yearHandleChange          = (newMin, newMax) => {setYearMinValue(newMin);setYearMaxValue(newMax);};
  const priceHandleChange         = (newMin, newMax) => {setPriceMinValue(newMin);setPriceMaxValue(newMax);};
  const milesHandleChange         = (newMin, newMax) => {setMilesMinValue(newMin);setMilesMaxValue(newMax);};
  const mpgHandleChange           = (newMin, newMax) => {setMpgMinValue(newMin);setMpgMaxValue(newMax);};
  const tankCapacityHandleChange  = (newMin, newMax) => {setTankCapacityMinValue(newMin);setTankCapacityMaxValue(newMax);};
  const evRangeHandleChange       = (newMin, newMax) => {setEvRangeMinValue(newMin);setEvRangeMaxValue(newMax);};
  const seatsHandleChange         = (newMin, newMax) => {setSeatsMinValue(newMin);setSeatsMaxValue(newMax);};
  const doorsHandleChange         = (newMin, newMax) => {setDoorsMinValue(newMin);setDoorsMaxValue(newMax);};
  const fuelTypeChange            = (newTypes)       => {setFuelTypeValue(newTypes)};
  const transmissionChange        = (newTransmission)=> {setTransmissionValue(newTransmission)};
  const brandChange               = (newBrand)       => {setBrandValue(newBrand)};

  const currentNavLocation = 'home' // make sure this is "home" on publish
  const [pageValue, setPageValue] = useState(currentNavLocation)
  const pageChange                = (newPage)        => {setPageValue(newPage); setCarClicked()}

  const [carClicked, setCarClicked] = useState()
  const carClickChange = (newCarClicked) => {setCarClicked(newCarClicked)}

  const [carToEditClicked, setCarToEditClicked] = useState()

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  if(carClicked && pageValue !== "car"){
    setPageValue("car")
    window.scrollTo(0, 0) // scrolls to the top of the page when the user clicks on a car - would other wise be half way down the page if scrolled
  }

  useEffect(() => { // resets the filters when the page changes
    setSortByValue("Relevancy");
    setOrderValue(true);
    setSearchNameValue("");
    setYearMinValue(0);
    setYearMaxValue(1000000);
    setPriceMinValue(0);
    setPriceMaxValue(1000000);
    setMilesMinValue(0);
    setMilesMaxValue(1000000);
    setMpgMinValue(0);
    setMpgMaxValue(1000000);
    setTankCapacityMinValue(0);
    setTankCapacityMaxValue(1000000);
    setEvRangeMinValue(0);
    setEvRangeMaxValue(1000000);
    setSeatsMinValue(0);
    setSeatsMaxValue(1000000);
    setDoorsMinValue(0);
    setDoorsMaxValue(1000000);
    setFuelTypeValue([]);
    setTransmissionValue([]);
    setBrandValue([]);
    newFetchCars();
  }, [pageValue]);

  switch(pageValue) {
    case 'cars':
      return (
      <>
        <div className="header">
          <Banner/>
          <NavMenu
            onChange={pageChange}
            onSetPage={pageValue}
            onLoginChange={setIsLoggedIn}
            loggedIn={isLoggedIn}
          />
        </div>
        <div className="main-content">
          <FilterMenu
            sortByValue={sortByValue}
            orderValue={orderValue}
            searchValue={searchValue}
            yearMinValue={yearMinValue}
            yearMaxValue={yearMaxValue}
            priceMinValue={priceMinValue}
            priceMaxValue={priceMaxValue}
            milesMinValue={milesMinValue}
            milesMaxValue={milesMaxValue}
            mpgMinValue={mpgMinValue}
            mpgMaxValue={mpgMaxValue}
            tankCapacityMinValue={tankCapacityMinValue}
            tankCapacityMaxValue={tankCapacityMaxValue}
            evRangeMinValue={evRangeMinValue}
            evRangeMaxValue={evRangeMaxValue}
            seatsMinValue={seatsMinValue}
            seatsMaxValue={seatsMaxValue}
            doorsMinValue={doorsMinValue}
            doorsMaxValue={doorsMaxValue}
            fuelTypeValue={fuelTypeValue}
            transmissionValue={transmissionValue}
            brandValue={brandValue}
            onOrderChange={orderChange}
            onSortByChange={sortByChange}
            onSearchNameChange={searchNameChange}
            onYearChange={yearHandleChange}
            onPriceChange={priceHandleChange}
            onMilesChange={milesHandleChange}
            onMpgChange={mpgHandleChange}
            onTankCapacityChange={tankCapacityHandleChange}
            onEvRangeChange={evRangeHandleChange}
            onSeatsChange={seatsHandleChange}
            onDoorsChange={doorsHandleChange}
            onFuelTypeChange={fuelTypeChange}
            onTransmissionChange={transmissionChange}
            onBrandChange={brandChange}
          />
          <CarList
            //fetchedCarList={fetchedCars}
            sortByValue={sortByValue}
            orderValue={orderValue}
            searchValue={searchValue}
            yearMinValue={yearMinValue}
            yearMaxValue={yearMaxValue}
            priceMinValue={priceMinValue}
            priceMaxValue={priceMaxValue}
            milesMinValue={milesMinValue}
            milesMaxValue={milesMaxValue}
            mpgMinValue={mpgMinValue}
            mpgMaxValue={mpgMaxValue}
            tankCapacityMinValue={tankCapacityMinValue}
            tankCapacityMaxValue={tankCapacityMaxValue}
            evRangeMinValue={evRangeMinValue}
            evRangeMaxValue={evRangeMaxValue}
            seatsMinValue={seatsMinValue}
            seatsMaxValue={seatsMaxValue}
            doorsMinValue={doorsMinValue}
            doorsMaxValue={doorsMaxValue}
            fuelTypeValue={fuelTypeValue}
            transmissionValue={transmissionValue}
            brandValue={brandValue}
            onCarClicked={carClickChange}
            setSortByValue={setSortByValue}
            url={url}
          />
        </div>
      </>);
    
    case 'car':
      return(
        <>
          <div className="header">
            <Banner/>
            <NavMenu 
              onChange={pageChange}
              onSetPage={pageValue}
              onLoginChange={setIsLoggedIn}
              loggedIn={isLoggedIn}
            />
          </div>
          <CarDetailsPage 
            OnReturn={() => {setCarClicked(); setPageValue("cars")}}
            car={carClicked}
          />
        </>
      );

  case 'admin-login':
      return(
        <>
          <div className="header">
            <Banner/>
            <NavMenu 
              onChange={pageChange}
              onSetPage={pageValue}
              onLoginChange={setIsLoggedIn}
              loggedIn={isLoggedIn}
            />
          </div>
          <AdminLoginPage 
            onLoginAttempt={() => {}}
            url={url}
            recievedBearerToken={ (token) =>{
              checkToken(token)
            }}
          />
        </>
      );

  case 'admin':
      return(
        <>
          <div className="header">
            <Banner/>
            <NavMenu 
              onChange={pageChange}
              onSetPage={pageValue}
              loggedIn={isLoggedIn}
              onLoginChange={(e) => { // this removed the user from the admin page when loggin out
                setIsLoggedIn(e);
                if (!e) {
                  setCarClicked(); 
                  setPageValue("home")}
                }
              }
            />
          </div>
          <AdminPage
            //adminFetchCars={fetchedCars}
            onCarEditClicked={(car) => {
              setCarToEditClicked(car);
              setPageValue("admin-edit");
            }}
            onCarPreviewClicked={carClickChange}
            onNewCarClicked={(car) => {
              setCarToEditClicked(car);
              setPageValue("admin-newCar");
            }}
            url={url}
            bearerToken={bearerToken}
          />
        </>
      );

  case 'admin-edit':
      return(
        <>
          <div className="header">
            <Banner/>
            <NavMenu 
              onChange={pageChange}
              onSetPage={pageValue}
              onLoginChange={setIsLoggedIn}
              loggedIn={isLoggedIn}
            />
          </div>
          <EditCarPage     
            carSelected={carToEditClicked}
            onSaveBtnPressed={() => newFetchCars()}
            OnReturn={() => {setCarClicked(); setPageValue("admin")}}
            siteURL={url}
            bearerToken={bearerToken}
          />
        </>
      );
              
  case 'admin-newCar':
      return(
        <>
          <div className="header">
            <Banner/>
            <NavMenu 
              onChange={pageChange}
              onSetPage={pageValue}
              onLoginChange={setIsLoggedIn}
              loggedIn={isLoggedIn}
            />
          </div>
          <NewCarPage     
            onSaveBtnPressed={() => newFetchCars()}
            OnReturn={() => {setCarClicked(); setPageValue("admin")}}
            siteURL={url}
            bearerToken={bearerToken}
          />
        </>
      );

    default:
      return(
        <>
        <div className="header">
          <Banner/>
          <NavMenu 
            onChange={pageChange}
            onSetPage={pageValue}
            onLoginChange={setIsLoggedIn}
            loggedIn={isLoggedIn}
          />
        </div>
        <div className="main-content text-center d-block pt-5">
          <p className="text-white pt-5">Sorry, the {pageValue} page is under construction.</p>
          <h1 className="text-white pb-5">Come Back Later!</h1>
        </div>
        </>
      );
  }
}

export default App;
