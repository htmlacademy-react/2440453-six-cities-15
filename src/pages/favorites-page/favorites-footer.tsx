type TFooterProps = {
  className: string;
}

function Footer({className}: TFooterProps) : JSX.Element {
  return (
    <footer className={className}>
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </a>
    </footer>
  );
}

export default Footer;
