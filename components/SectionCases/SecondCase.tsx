export const SecondCase = () => {
  return (
    <>
      <div className='case-content-qoute'>
        <div className='d-flex align-center mb-30'>
          <img className='customer-icon-big' src='/img/client-2.svg' alt='' />
          <h3 className='h3 ml-15'>V-Estate</h3>
        </div>
        <p className='body mb-30'>
          Convenience of the service does not increase sales by itself, but allows the developer to exchange digital
          documents with all participants in the process and reduce operating costs and lost profits from the waiting time
          for payment of the SEC. Our experts estimate the economic effect of switching to electronic registration at the
          level of $12M per year.
        </p>
        <div className='d-flex align-center'>
          <img className='mr-15' src='/img/avatar-2.png' alt='photo' />
          <span className='d-flex flex-column'>
            <strong className='agent-name'>Niko Long</strong>
            <small className='agent-position'>Commercial Director</small>
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
          <small className='metrics-name'>Economy</small>
          <strong className='metrics-data'>
            40<span style={{ fontSize: 24 }}>%</span>
            <span className='metrics-data-caption'> / year</span>
          </strong>
        </li>
        <div className='horizontal-divider'></div>
        <li className='metrics-item'>
          <small className='metrics-name'>Faster than MFC</small>
          <strong className='metrics-data'>2x</strong>
        </li>
      </ul>
    </>
  );
};
