import logoadalab from '../images/logo-adalab.png';
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        Awesome profile-cards by Codequetecode © 2022
      </p>
      <a href="https://adalab.es/" target="_blank">
        <img
          className="footer__logo"
          src={logoadalab}
          alt="Logo de Adalab"
          title="Adalab"
        />
      </a>
    </footer>
  );
}
export default Footer;
