import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import AdminHomePage from "./Pages/AdminHomePage/AdminHomePage";
import ApplicationFormPage from "./Pages/ApplicationFormPage/ApplicationFormPage";
import CreateTripPage from "./Pages/CreateTripPage/CreateTripPage";
import HomePage from "./Pages/HomePage/HomePage";
import ListTripsPage from "./Pages/ListTripsPage/ListTripsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import TripDetailsPage from "./Pages/TripDetailsPage/TripDetailsPage";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>

          <Route exact path='/ListTripPage'>
            <ListTripsPage />
          </Route>

          <Route exact path='/ListTripPage/ApplicationFormPage'>
           <ApplicationFormPage />
          </Route>

          <Route exact path='/LoginPage'>
            <LoginPage />
          </Route>

          <Route exact path='/LoginPage/AdminHomePage'>
            <AdminHomePage />
          </Route>

          <Route exact path='/LoginPage/AdminHomePage/TripDetailsPage'>
            <TripDetailsPage />
          </Route>

          <Route exact path='/LoginPage/AdminHomePage/CreateTripPage'>
            <CreateTripPage />
          </Route>

          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
