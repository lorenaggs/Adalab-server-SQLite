import logo from '../images/Codequetecode.png';
import tarjetasmolonas from '../images/tarjetas-molonas.png';
function Header() {
  return (
    <header className="header">
      <a href="./index.html#landing">
        <img
          className="header__logo"
          src={tarjetasmolonas}
          alt="Logo de tarjetas molonas"
        />
      </a>
      <p className="header_by">by</p>
      <img className="header__img" src={logo} alt="Logo de Codequetecode" />
    </header>
  );
}
export default Header;
