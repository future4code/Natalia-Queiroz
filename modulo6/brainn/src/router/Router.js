import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MegaSenaPage from '../pages/MegaSenaPage/MegaSenaPage'
import QuinaPage from '../pages/QuinaPage/QuinaPage'
import LotofacilPage from '../pages/LotofacilPage/LotofacilPage'
import LotomaniaPage from '../pages/LotomaniaPage/LotomaniaPage'
import TimemaniaPage from '../pages/TimemaniaPage/TimemaniaPage'
import DiaDeSortePage from '../pages/DiaDeSortePage/DiaDeSortePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/mega-sena'}>
                    <MegaSenaPage />
                </Route>
                <Route exact path={'/quina'}>
                    <QuinaPage />
                </Route>
                <Route exact path={'/lotofacil'}>
                    <LotofacilPage />
                </Route>
                <Route exact path={'/lotomania'}>
                    <LotomaniaPage />
                </Route>
                <Route exact path={'/Timemania'}>
                    <TimemaniaPage />
                </Route>
                <Route exact path={'/dia-de-sorte'}>
                    <DiaDeSortePage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router