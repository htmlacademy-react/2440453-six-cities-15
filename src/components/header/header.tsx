import { Link } from 'react-router-dom';
import { AuthorizationStatus, RouteList } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getFavorites, getUser } from '../../store';
import SignOut from './header-sign-out';
import LoggedBlock from './logged-block';
import NotLoggedBlock from './not-logged-block';

type THeaderProps = {
  authStatus: AuthorizationStatus;
}

function Header({authStatus}: THeaderProps) : JSX.Element {
  const user = useAppSelector(getUser);
  const count = useAppSelector(getFavorites).length;
  const isLogged = authStatus === AuthorizationStatus.Auth && user;
  const loggedBlock = isLogged ? <LoggedBlock email={user.email} count={count}/> : <NotLoggedBlock/>;
  const navDirect = isLogged ? RouteList.Favourites : RouteList.Login;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={RouteList.Root} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={navDirect}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {loggedBlock}
                </Link>
              </li>
              {isLogged && <SignOut/>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
