import { AuthorizationStatus, RouteList } from '../../consts';
import { Link } from 'react-router-dom';
import SignOut from './header-sign-out';
import { useAppSelector } from '../../hooks';

type THeaderProps = {
  authStatus: AuthorizationStatus;
}

type TLoggedBlockProps = {
  email: string;
  count: number;
}

function LoggedBlock({email, count}: TLoggedBlockProps) : JSX.Element {
  return (
    <>
      <span className="header__user-name user__name">{email}</span>
      <span className="header__favorite-count">{count}</span>
    </>
  );
}

function NotLoggedBlock() : JSX.Element {
  return(
    <span className="header__login">Sign in</span>
  );
}

function Header({authStatus}: THeaderProps) : JSX.Element {
  const user = useAppSelector((state) => state.user);
  const count = useAppSelector((state) => state.favoritesList.length);
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

