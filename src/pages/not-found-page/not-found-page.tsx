import { Link } from 'react-router-dom';
import { ROUTE_LIST } from '../../consts';
import { randomCity } from '../../utils';

function NotFoundPage() : JSX.Element {
  const city = randomCity();
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404 PAGE NOT FOUND</h1>
            <Link to={ROUTE_LIST.Root}>
              <h2>Вернуться на главную</h2>
            </Link>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={ROUTE_LIST.Root} className="locations__item-link">
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
