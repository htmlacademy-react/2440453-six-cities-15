import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, RouteList } from '../../consts';

type PrivateRouteProps = {
  children: JSX.Element;
  navAddress: RouteList;
  authStatus: AuthorizationStatus;
}

function PrivateRouteLogin({children, navAddress, authStatus}: PrivateRouteProps): JSX.Element {
  const condition = authStatus !== AuthorizationStatus.Auth;
  return (
    condition ? children : <Navigate to={navAddress}/>
  );
}

export default PrivateRouteLogin;
