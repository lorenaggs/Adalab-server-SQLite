import DefaultImage from '../images/example1.jpg';
function CardPreview(props) {
  const handleResetBtn = () => {
    props.handleReset();
  };

  return (
    <section className='profile'>
      <button
        className='profile__button js-btn-cancel'
        onClick={handleResetBtn}
      >
        <i className='fas fa-trash-alt'></i>
        <p className='profile__text'>Reset</p>
      </button>
      <div className={`rectangle js-preview palette-${props.data.palette}`}>
        <div className='rectangle__titles'>
          <h2 className='js-reset rectangle__titles-title js_name'>
            {props.data.name || 'Nombre Apellido'}
          </h2>
          <h3 className='js-reset rectangle__titles-subtitle js_job'>
            {props.data.job || 'Front-end developer'}
          </h3>
        </div>
        <div
          className='rectangle__preview js__profile-image'
          style={{
            backgroundImage: `url(${props.data.photo || DefaultImage})`,
          }}
        ></div>
        <ul className='rectangle__icons'>
          <li>
            <a
              target='_blank'
              href={`tel:${props.data.phone}`}
              className='rectangle__icons-item js_phone'
            >
              <i className='rectangle__icons-item-size fas fa-mobile-alt'></i>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href={`mailto:${props.data.email}`}
              className='rectangle__icons-item js_email'
            >
              <i className='rectangle__icons-item-size far fa-envelope'></i>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href={`https://www.linkedin.com/in/${props.data.linkedin}`}
              className='rectangle__icons-item js_linkedin'
            >
              <i className='rectangle__icons-item-size fab fa-linkedin-in'></i>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href={`https://github.com/${props.data.github}`}
              className='rectangle__icons-item js_github'
            >
              <i className='rectangle__icons-item-size fab fa-github-alt'></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default CardPreview;
