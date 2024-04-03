import { useNavigate } from 'react-router-dom';
import { ROUTE_LIST } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { logout } from '../../store/api-actions';
//Вообще тут должно быть следующее - если это фэйворит - то валимся в логин или мэйн, а иначе - ничего не меняется

function SignOut() : JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const HandleClick = () => {
    dispatch(logout());
    navigate(ROUTE_LIST.Login);
  };
  return (
    <li className="header__nav-item" onClick={HandleClick}>
      <div className="header__nav-link">
        <span className="header__signout">Sign out</span>
      </div>
    </li>
  );
}

export default SignOut;
