import { TOfferList } from '../../types';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from './favorites-empty';

type TFavoritesProps = {
  offerList: TOfferList;
}

function Favorites({offerList}: TFavoritesProps) : JSX.Element {
  const fullCondition = offerList && offerList.length > 0;
  const favorites = fullCondition ? <FavoritesList offerList={offerList}/> : <FavoritesEmpty/>;
  const emptyMainClass = fullCondition ? '' : ' page__main--favorites-empty';
  const emptySectionClass = fullCondition ? '' : ' favorites--empty';
  const title = fullCondition ? 'Saved listing' : 'Favorites (empty)';
  const headerClass = fullCondition ? 'favorites__title' : 'visually-hidden';
  return (
    <main className={`page__main page__main--favorites${emptyMainClass}`}>
      <div className="page__favorites-container container">
        <section className={`favorites${emptySectionClass}`}>
          <h1 className={headerClass}>{title}</h1>
          {favorites}
        </section>
      </div>
    </main>
  );
}

export default Favorites;
