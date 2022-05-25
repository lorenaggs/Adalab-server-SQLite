function Design(props) {
  const handleChangeInput = (ev) => {
    props.handleInput({
      value: ev.target.value,
      name: ev.target.name,
    });
  };
  const handleDesign = () => {
    props.handleDesignClick();
  };

  return (
    <fieldset className='design js__design-fieldset'>
      <legend
        className='design__legend js__design-legend'
        id='design_legend'
        onClick={handleDesign}
      >
        <div className='design__legend__container'>
          <div>
            <i className='design__legend__container__icon far fa-object-ungroup'></i>
          </div>
          <h2 className='design__legend__container__text'>Diseña</h2>
        </div>
        <div>
          <i
            className={`js__arrowDown1 fas fa-chevron-down fill__legend--title--arrow ${
              props.design ? '' : 'rotate'
            }`}
          ></i>
        </div>
      </legend>

      <div
        className={`design__colors js__design-colors ${
          props.design ? 'collapsed' : ''
        } `}
      >
        <p className='design__text'>Colores</p>
        <div>
          <div className='design__container design__container--1'>
            <input
              className='js-radio design__palette'
              type='radio'
              id='color1'
              name='palette'
              value='1'
              onChange={handleChangeInput}
              checked={props.data.palette === '1'}
            />
            <div className='design__rectangle design__rectangle--1'></div>
            <div className='design__rectangle design__rectangle--2'></div>
            <div className='design__rectangle design__rectangle--3'></div>
          </div>

          <div className='design__container design__container--2'>
            <input
              className='js-radio design__palette'
              type='radio'
              id='color2'
              name='palette'
              value='2'
              onChange={handleChangeInput}
              checked={props.data.palette === '2'}
            />
            <div className='design__rectangle design__rectangle--4'></div>
            <div className='design__rectangle design__rectangle--5'></div>
            <div className='design__rectangle design__rectangle--6'></div>
          </div>

          <div className='design__container design__container--3'>
            <input
              className='js-radio design__palette'
              type='radio'
              id='color3'
              name='palette'
              value='3'
              onChange={handleChangeInput}
              checked={props.data.palette === '3'}
            />
            <div className='design__rectangle design__rectangle--7'></div>
            <div className='design__rectangle design__rectangle--8'></div>
            <div className='design__rectangle design__rectangle--9'></div>
          </div>
          <div className='design__container design__container--4'>
            <input
              className='js-radio design__palette'
              type='radio'
              id='color4'
              name='palette'
              value='4'
              onChange={handleChangeInput}
              checked={props.data.palette === '4'}
            />
            <div className='design__rectangle design__rectangle--10'></div>
            <div className='design__rectangle design__rectangle--11'></div>
            <div className='design__rectangle design__rectangle--12'></div>
          </div>
        </div>
      </div>
    </fieldset>
  );
}
export default Design;
