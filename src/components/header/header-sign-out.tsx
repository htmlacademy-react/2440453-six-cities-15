import { useAppDispatch } from '../../hooks';
import { logout } from '../../store/api-actions';

function SignOut() : JSX.Element {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(logout());
  };
  return (
    <li className="header__nav-item" onClick={onClick}>
      <div className="header__nav-link">
        <span className="header__signout">Sign out</span>
      </div>
    </li>
  );
}

export default SignOut;
