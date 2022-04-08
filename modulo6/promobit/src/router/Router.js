import React from "react"
import { Switch, Route} from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage"
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <Switch>
            <Route exact path={'/'}>
                <HomePage />
            </Route>

            <Route exact path={'/details/:id'}>
                <DetailsPage />
            </Route>
            
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}
export default Router