import { TOfferList } from '../../types';
import FavoritesList from '../favorites-list/favorites-list';
import FavoritesEmpty from './favorites-empty';

type TFavoritesProps = {
  offerList: TOfferList | null;
}

function Favorites({offerList}: TFavoritesProps) : JSX.Element {
  const favorites = offerList ? <FavoritesList offerList={offerList}/> : <FavoritesEmpty/>;
  const emptyMainClass = offerList ? '' : ' page__main--favorites-empty';
  const emptySectionClass = offerList ? '' : ' page__main--favorites-empty';
  const title = offerList ? 'Saved listing' : 'Favorites (empty)';
  const headerClass = offerList ? 'favorites__title' : 'visually-hidden';
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
