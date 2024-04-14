import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { RouteList } from '../../consts';
import { getAuthStatus, getOffers, store, checkLogin, fetchOffersList } from '../../store';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';

store.dispatch(fetchOffersList());
store.dispatch(checkLogin());

function App() : JSX.Element {
  const offerList = useAppSelector(getOffers);
  const authStatus = useAppSelector(getAuthStatus);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteList.Root} element={<MainPage offersList={offerList}/>}/>
        <Route path={RouteList.Favourites} element={<PrivateRoute authStatus={authStatus} navAddress={RouteList.Login}><FavoritesPage/></PrivateRoute>}/>
        <Route path={RouteList.Login} element={<PrivateRoute authStatus={authStatus} navAddress={RouteList.Root} reverseOperation><LoginPage/></PrivateRoute>}/>
        <Route path={RouteList.Offer} element={<OfferPage/>}/>
        <Route path={RouteList.Unknown} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
