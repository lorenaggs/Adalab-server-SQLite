import '../styles/layout/main.scss';
import { Link } from 'react-router-dom';
import logo from '../images/Codequetecode.png';
import logoAwesome from '../images/tarjetas-molonas.png';
function Main() {
  return (
    <main className="main">
      <img
        src={logoAwesome}
        className="main__logo"
        alt="Logo de tarjetas molonas"
        width="250px"
        height="63px"
      />
      <div className="group-logo">
        <p className="group-logo_by">by</p>
        <img className="group-logo_img" src={logo} alt="Logo de Codequetecode" />
      </div>
      <h1 className="main__title">Crea tu tarjeta de visita</h1>
      <div className="main__text--box">
        <p className="main__text">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
      </div>
      <div className="main__container">
        <ul className="main__box">
          <li className="main__box--icon">
            <i className="main__icon fa-solid fa-object-ungroup"></i>
            <span className="main__box--words">Diseña</span>
          </li>
          <li className="main__box--icon">
            <i className="main__icon fa-regular fa-keyboard"></i>
            <span className="main__box--words">Rellena</span>
          </li>
          <li className="main__box--icon">
            <i className="fa fa-share-alt"></i>
            <span className="main__box--words">Comparte</span>
          </li>
        </ul>
      </div>
      <Link
        to="/Card"
        className="main__button"
        title="Go create card"
        alt="Go create card"
      >
        Comenzar
      </Link>
    </main>
  );
}
export default Main;
