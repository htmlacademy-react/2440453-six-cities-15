import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesList, getAuthStatus, getFavorites, getFavoritesLoadStatus } from '../../store';
import { OFFERS_LOADED_STATUS } from '../../consts';
import Favorites from '../../components/favorites/favorites';
import Header from '../../components/header/header';
import LoadingBlock from '../../components/loading-block/loading-block';
import ErrorMessage from '../../components/error-message/error-message';
import Footer from './footer';

function FavoritesPage() : JSX.Element {
  const offerList = useAppSelector(getFavorites);
  const favoritesStatus = useAppSelector(getFavoritesLoadStatus);
  const authStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();
  let block = <LoadingBlock/>;

  useEffect(() => {
    dispatch(fetchFavoritesList());
  }, [dispatch]);

  if (favoritesStatus === OFFERS_LOADED_STATUS[2]) {
    block = <Favorites offerList={offerList}/>;
  } else if (favoritesStatus === OFFERS_LOADED_STATUS[3]) {
    block = <ErrorMessage/>;
  } else {
    block = <LoadingBlock />;
  }

  return (
    <div className="page">
      <Header authStatus={authStatus}/>
      {block}
      <Footer className={offerList ? 'footer container' : 'footer'}/>
    </div>
  );
}

export default FavoritesPage;
