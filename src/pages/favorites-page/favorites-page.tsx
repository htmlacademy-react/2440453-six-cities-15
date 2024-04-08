import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import Favorites from '../../components/favorites/favorites';
import Footer from './favorites-footer';
import { fetchFavoritesList } from '../../store/api-actions';
import Header from '../../components/header/header';
import { OFFERS_LOADED_STATUS } from '../../consts';
import LoadingBlock from '../../components/loading-block/loading-block';
import ErrorMessage from '../../components/error-message/error-message';


function FavoritesPage() : JSX.Element {
  const offerList = useAppSelector((state) => state.favoritesList);
  const favoritesStatus = useAppSelector((state) => state.favoritesLoadStatus);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
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
