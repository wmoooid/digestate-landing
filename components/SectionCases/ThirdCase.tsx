export const ThirdCase = () => {
  return (
    <div className='case-content'>
      <div className='case-content-qoute'>
        <div className='d-flex align-center mb-30'>
          <img className='customer-icon-big' src='/img/client-3.svg' alt='' />
          <h3 className='h3 ml-15'>Unique Property</h3>
        </div>
        <p className='body mb-30'>
          We have been looking for a partner for a long time. At first they tried to work with banking services. They were
          not quite ready to work at the pace we needed. Therefore, after a long search, negotiations, testing, we settled on
          the service of digēstate. We are completely satisfied with the interface they have developed. It allows you to
          track the transaction at each stage, exchange digital documents with all participants in the process.
        </p>
        <div className='d-flex align-center'>
          <img className='mr-15' src='/img/avatar-3.png' alt='photo' />
          <span className='d-flex flex-column'>
            <strong className='agent-name'>Maisey Mathis</strong>
            <small className='agent-position'>Director of Sales</small>
          </span>
        </div>
      </div>
      <ul className='metrics-list'>
        <li className='metrics-item'>
          <small className='metrics-name'>SEC registration in</small>
          <strong className='metrics-data'>
            1-2 <span className='metrics-data-caption'>days</span>
          </strong>
        </li>
        <div className='horizontal-divider'></div>
        <li className='metrics-item'>
          <small className='metrics-name'>Registred deals</small>
          <strong className='metrics-data'>2 350</strong>
        </li>
        <div className='horizontal-divider'></div>
        <li className='metrics-item'>
          <small className='metrics-name'>Faster sales cycle</small>
          <strong className='metrics-data'>
            <span className='metrics-data-caption'>by </span>40%
          </strong>
        </li>
      </ul>
    </div>
  );
};
