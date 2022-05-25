import GetAvatar from './GetAvatar';

function Fill(props) {
  const handleChangeInput = (ev) => {
    props.handleInput({
      value: ev.target.value,
      name: ev.target.name,
    });
  };
  const handleFill = () => {
    props.handleFillClick();
  };

  return (
    <fieldset className='fill'>
      <legend className='fill__legend js__fill-legend' onClick={handleFill}>
        <div className='fill__legend--title'>
          <i className='fill__legend--title--icon fas fa-keyboard'></i>
          <h2 className='fill__legend--title--name'>Rellena</h2>
        </div>
        <div>
          <i
            className={`js__arrowDown2 fas fa-chevron-down fill__legend--title--arrow ${
              props.fill ? '' : 'rotate'
            }`}
          ></i>
        </div>
      </legend>
      <div
        className={`js__field js__inputs field ${
          props.fill ? 'collapsed' : ''
        }`}
      >
        <div className='field__item'>
          <label htmlFor='name'>Nombre completo</label>
          <input
            className='field__item--placeholder js-reset js-input-name'
            id='name'
            type='text'
            name='name'
            placeholder='Ej: Paz Gimeno Lorente'
            required
            value={props.data.name}
            onChange={handleChangeInput}
          />
        </div>
        <div className='field__item'>
          <label htmlFor='job'>Puesto</label>
          <input
            className='field__item--placeholder js-reset js-input-job'
            id='job'
            type='text'
            name='job'
            placeholder='Ej: Front-end unicorn'
            required
            value={props.data.job}
            onChange={handleChangeInput}
          />
        </div>
        <GetAvatar avatar={props.avatar} updateAvatar={props.updateAvatar} />
        <div className='field__item'>
          <label htmlFor='email'>Email</label>
          <input
            className='field__item--placeholder js-reset js-input-email'
            id='email'
            type='email'
            name='email'
            href=''
            placeholder='Ej: paz-gimeno@gmail.com'
            required
            value={props.data.email}
            onChange={handleChangeInput}
          />
        </div>
        <div className='field__item'>
          <label htmlFor='phone'>Teléfono</label>
          <input
            className='field__item--placeholder js-reset js-input-phone'
            id='phone'
            type='tel'
            name='phone'
            href=''
            placeholder='Ej: 555 555 555'
            required
            value={props.data.phone}
            onChange={handleChangeInput}
          />
        </div>
        <div className='field__item'>
          <label htmlFor='linkedin'>Linkedin</label>
          <input
            className='field__item--placeholder js-reset js-input-linkedin'
            id='linkedin'
            type='text'
            name='linkedin'
            href=''
            placeholder='Ej: paz-gimeno'
            required
            value={props.data.linkedin}
            onChange={handleChangeInput}
          />
        </div>
        <p className='field__warning'>
          <span className='field__warning-star'>*</span> Escribe únicamente la
          parte de la URL que lleva a tu perfil de LinkedIn
        </p>
        <div className='field__item'>
          <label htmlFor='github'>Github</label>
          <input
            className='field__item--placeholder js_github js-reset js-input-github'
            id='github'
            type='text'
            name='github'
            placeholder='Ej: PazGimeno1937'
            value={props.data.github}
            onChange={handleChangeInput}
          />
        </div>
        <p className='field__warning'>
          <span className='field__warning-star'>*</span> Escribe únicamente la
          parte de la URL que lleva a tu perfil de Github
        </p>
      </div>
    </fieldset>
  );
}
export default Fill;
