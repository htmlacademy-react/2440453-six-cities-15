import { Link } from 'react-router-dom';
import { ROUTE_LIST } from '../../consts';

type TFooterProps = {
  className: string;
}

function Footer({className}: TFooterProps) : JSX.Element {
  return (
    <footer className={className}>
      <Link to={ROUTE_LIST.Root} className="footer__logo-link">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </Link>
    </footer>
  );
}

export default Footer;
