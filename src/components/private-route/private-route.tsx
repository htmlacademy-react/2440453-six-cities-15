import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, RouteList } from '../../consts';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: AuthorizationStatus;
  reverseOperation?: boolean;
  navAddress: RouteList;
}

function PrivateRoute({children, authStatus, navAddress, reverseOperation = false}: PrivateRouteProps): JSX.Element {
  const condition = reverseOperation ? authStatus !== AuthorizationStatus.Auth : authStatus === AuthorizationStatus.Auth;
  return (
    condition ? children : <Navigate to={navAddress}/>
  );
}

export default PrivateRoute;
