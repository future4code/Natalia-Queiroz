import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import MegaSenaPage from '../pages/MegaSenaPage/MegaSenaPage'
// import QuinaPage from '../pages/QuinaPage/QuinaPage'
// import LotofacilPage from '../pages/LotofacilPage/LotofacilPage'
// import LotomaniaPage from '../pages/LotomaniaPage/LotomaniaPage'
// import TimemaniaPage from '../pages/TimemaniaPage/TimemaniaPage'
// import DiaDeSortePage from '../pages/DiaDeSortePage/DiaDeSortePage'
// import ErrorPage from '../pages/ErrorPage/ErrorPage'
import {Home} from '../pages/Home/Home'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>                
                <Route exact path={'/'}>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router