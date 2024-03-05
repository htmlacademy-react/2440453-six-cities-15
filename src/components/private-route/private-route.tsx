import { AuthorizationStatus, ROUTE_LIST } from '../../consts';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: AuthorizationStatus;
  reverseOperation?: boolean;
}

function PrivateRoute({children, authStatus, reverseOperation = false}: PrivateRouteProps): JSX.Element {
  const condition = reverseOperation ? authStatus !== AuthorizationStatus.Auth : authStatus === AuthorizationStatus.Auth;
  return (
    condition ? children : <Navigate to={ROUTE_LIST.Root}/>
  );
}

export default PrivateRoute;
