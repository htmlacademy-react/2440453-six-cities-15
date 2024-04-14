import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, RouteList } from '../../consts';

type PrivateRouteProps = {
  children: JSX.Element;
  navAddress: RouteList;
  authStatus: AuthorizationStatus;
}

function PrivateRoute({children, navAddress, authStatus}: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthorizationStatus.Auth ? children : <Navigate to={navAddress}/>
  );
}

export default PrivateRoute;
