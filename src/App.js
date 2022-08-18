import "./App.css";

//Components
import NavBar from "./layout/header/NavBar";
import SideBar from "./layout/content/sidebar/SideBar";

//Pages
import Flight from "./layout/content/sidebar/flight/Flight";
import HotelView from "./layout/content/sidebar/home-hotel/HotelView";
import Tours from "./layout/content/sidebar/tours/Tours";
import CarRental from "./layout/content/sidebar/carrental/CarRental";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <BrowserRouter>
          <SideBar />
          <Switch>
            <Route exact path="/">
              <HotelView />
            </Route>
            <Route path="/flight">
              <Flight />
            </Route>
            <Route path="/car-rental">
              <CarRental />
            </Route>
            <Route path="/tours">
              <Tours />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
