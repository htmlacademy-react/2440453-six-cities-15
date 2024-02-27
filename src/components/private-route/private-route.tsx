import { AuthorizationStatus, ROUTE_LIST } from '../../consts';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: AuthorizationStatus;
}

function PrivateRoute({children, authStatus}: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthorizationStatus.Auth ? children : <Navigate to={ROUTE_LIST.Root}/>
  );
}

export default PrivateRoute;
