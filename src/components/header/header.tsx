import { AuthorizationStatus, ROUTE_LIST } from '../../consts';
import { Link } from 'react-router-dom';
import SignOut from './header-sign-out';

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
  const email = 'sdsdsd';
  const number = 3;
  const isLogged = authStatus === AuthorizationStatus.Auth;
  const loggedBlock = isLogged ? <LoggedBlock email={email} count={number}/> : <NotLoggedBlock/>;
  const navDirect = isLogged ? ROUTE_LIST.Favourites : ROUTE_LIST.Login;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={ROUTE_LIST.Root} className="header__logo-link">
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

