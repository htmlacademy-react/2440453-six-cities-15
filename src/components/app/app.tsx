import { ROUTE_LIST } from '../../consts';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { checkLogin, fetchOffersList } from '../../store/api-actions';
import { store } from '../../store';

store.dispatch(fetchOffersList());
store.dispatch(checkLogin());

function App() : JSX.Element {
  const offerList = useAppSelector((state) => state.offers);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_LIST.Root} element={<MainPage offersList={offerList}/>}/>
        <Route path={ROUTE_LIST.Favourites} element={<PrivateRoute authStatus={authStatus}><FavoritesPage offerList={offerList}/></PrivateRoute>}/>
        <Route path={ROUTE_LIST.Login} element={<PrivateRoute authStatus={authStatus} reverseOperation><LoginPage/></PrivateRoute>}/>
        <Route path={ROUTE_LIST.Offer} element={<OfferPage/>}/>
        <Route path={ROUTE_LIST.Unknown} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
