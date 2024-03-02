import { AuthorizationStatus, ROUTE_LIST } from '../../consts';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { TOfferList } from '../../types';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';

type TAppProps = {
  offerList: TOfferList;
}

function App({offerList}: TAppProps) : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_LIST.Root} element={<MainPage offerList={offerList}/>}/>
        <Route path={ROUTE_LIST.Favourites} element={<PrivateRoute authStatus={AuthorizationStatus.NoAuth}><FavoritesPage offerList={offerList}/></PrivateRoute>}/>
        <Route path={ROUTE_LIST.Login} element={<PrivateRoute authStatus={AuthorizationStatus.NoAuth} reverseOperation><LoginPage/></PrivateRoute>}/>
        <Route path={ROUTE_LIST.Offer} element={<OfferPage/>}/>
        <Route path={ROUTE_LIST.Unknown} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
