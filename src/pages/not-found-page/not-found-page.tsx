import { Link, useNavigate } from 'react-router-dom';
import { RouteList } from '../../consts';
import { randomCity } from '../../utils';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';

function NotFoundPage() : JSX.Element {
  const city = randomCity();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(changeCity({city:city}));
    navigate(RouteList.Root);
  };
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404 PAGE NOT FOUND</h1>
            <Link to={RouteList.Root}>
              <h2>Вернуться на главную</h2>
            </Link>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <div className="locations__item-link" onClick={onClick}>
                <span>{city}</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
