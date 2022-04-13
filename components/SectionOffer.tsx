import React from 'react';

export const SectionOffer = () => {
  const [employNumber, setEmployNumber] = React.useState(100);
  const [serviceLife, setServiceLife] = React.useState(3);
  const [apiIntegration, setApiIntegration] = React.useState(false);

  function handleChange(event: any) {
    setEmployNumber(event.target.value);
  }

  function handleRadio(event: any) {
    setServiceLife(event.target.value);
  }

  function handleApiChange(event: any) {
    setApiIntegration(event.target.checked);
  }

  let offerValue = ((employNumber / 11 + 1000 / 11) * ((2 * serviceLife) / 3 + 1) + (apiIntegration ? 50 : 0)) / serviceLife;
  let offerValueRound = Math.round(offerValue / 5) * 5;

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='h2 mb-50'>Ready to start with digēstate?</h2>
        <div className='pricing-calc'>
          <div className='value-picker'>
            <div className='employees-number'>
              <div className='range-picker'>
                <label htmlFor='employees' className='body'>
                  Number of employees
                </label>
                <input
                  type='number'
                  id='employees'
                  className='input-number'
                  value={employNumber}
                  onChange={handleChange}
                  min={100}
                  max={10000}
                  step={100}
                />
                <progress className='input-progress' max={10000} value={employNumber}></progress>
                <input
                  type='range'
                  onChange={handleChange}
                  className='input-range'
                  value={employNumber ? employNumber : 0}
                  min={100}
                  max={10000}
                  step={100}
                />
              </div>
              <div className='d-flex justify-between mt-15'>
                <span className='range-caption'>100</span>
                <span className='range-caption'>5 000</span>
                <span className='range-caption'>10 000</span>
              </div>
            </div>
            <div className='service-life'>
              <span className='body'>Service life</span>
              <div className='service-life-picker'>
                <label className='radio-label'>
                  <input className='input-radio' type='radio' name='service-life' value={3} onClick={handleRadio} />
                  <span className='radio-text'>3 month</span>
                </label>
                <label className='radio-label'>
                  <input className='input-radio' type='radio' name='service-life' value={6} onClick={handleRadio} />
                  <span className='radio-text'>6 month</span>
                </label>
                <label className='radio-label'>
                  <input className='input-radio' type='radio' name='service-life' value={9} onClick={handleRadio} />
                  <span className='radio-text'>9 month</span>
                </label>
                <label className='radio-label'>
                  <input className='input-radio' type='radio' name='service-life' value={12} onClick={handleRadio} />
                  <span className='radio-text'>1 year</span>
                </label>
              </div>
            </div>
            <div className='api-integration'>
              <input type='checkbox' id='api-checkbox' onChange={handleApiChange} />
              <label htmlFor='api-checkbox'>API integration</label>
              <span className='api-learn'>Learn more</span>
            </div>
          </div>
          <div className='our-offer'>
            <h4 className='offer-heading'>Оur offer</h4>
            <div className='d-flex flex-column'>
              <strong className='offer-value'>${offerValueRound.toLocaleString('en-US')}</strong>
              <small className='offer-caption'>per month</small>
            </div>
            <p className='body offer-text'>If you would like a service plan for more than a year, please contact us.</p>
            <button className='button accent'>Get offer</button>
          </div>
        </div>
      </div>
    </section>
  );
};
