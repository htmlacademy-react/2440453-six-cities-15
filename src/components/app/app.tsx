import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { RouteList } from '../../consts';
import { getOffers, store, checkLogin, fetchOffersList, getAuthStatus } from '../../store';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import PrivateRouteLogin from '../private-route/private-route-login';

store.dispatch(fetchOffersList());
store.dispatch(checkLogin());

function App() : JSX.Element {
  const offerList = useAppSelector(getOffers);
  const authStatus = useAppSelector(getAuthStatus);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteList.Root} element={<MainPage offersList={offerList}/>}/>
        <Route path={RouteList.Login} element={<PrivateRouteLogin navAddress={RouteList.Root} authStatus={authStatus}><LoginPage/></PrivateRouteLogin>}/>
        <Route path={RouteList.Favourites} element={<PrivateRoute navAddress={RouteList.Login} authStatus={authStatus}><FavoritesPage/></PrivateRoute>}/>
        <Route path={RouteList.Offer} element={<OfferPage/>}/>
        <Route path={RouteList.Unknown} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
