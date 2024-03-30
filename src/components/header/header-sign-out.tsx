import { Link } from 'react-router-dom';
import { ROUTE_LIST } from '../../consts';
function SignOut() : JSX.Element {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={ROUTE_LIST.Login}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default SignOut;
