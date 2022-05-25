function Share(props) {
  const handleClick = (ev) => {
    ev.preventDefault();
    props.handleCard();
  };

  const handleShare = () => {
    props.handleShareClick();
  };

  const handleTwitterShare = (ev) => {
    ev.preventDefault();
    props.handleTwitterShare();
  };

  return (
    <fieldset className='share'>
      <legend className='share__legend js__share-legend' onClick={handleShare}>
        <div className='share__legend__container'>
          <i className='share__legend__container__icon fa fa-share-alt'></i>
          <h2 className='share__legend__container__text'>Comparte</h2>
        </div>
        <div>
          <i
            className={`js__arrowDown3 fas fa-chevron-down fill__legend--title--arrow ${
              props.share ? '' : 'rotate'
            }`}
          ></i>
        </div>
      </legend>
      <article
        className={`js__share share__article ${props.share ? 'collapsed' : ''}`}
      >
        <div className='share__container'>
          <button
            className='share__container--button js-share-btn'
            onClick={handleClick}
          >
            <i className='share__container--button__icon far fa-address-card'></i>
            <p className='share__container--button__text js_create'>
              Crear tarjeta
            </p>
          </button>
        </div>
        <div className={`share__card js-message ${props.classTwitter}`}>
          <p className='share__card__title js-create'>
            La tarjeta ha sido creada:
          </p>
          <a className='share__card__link js-url' href={props.apiData.cardURL}>
            {props.apiData.cardURL || 'url'}
          </a>
          <div className='share__card__twitter'>
            <button
              className='share__card__twitter--button js-twitter-button'
              onClick={handleTwitterShare}
            >
              <i className='fab fa-twitter'></i>
              <p className='hare__card__twitter--button--text'>
                Compartir en twitter
              </p>
            </button>
          </div>
        </div>
      </article>
    </fieldset>
  );
}
export default Share;
