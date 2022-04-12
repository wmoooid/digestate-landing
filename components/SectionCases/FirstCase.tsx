export const FirstCase = () => {
  return (
    <div className='case-content'>
      <div className='case-content-qoute'>
        <div className='d-flex align-center mb-30'>
          <img className='customer-icon-big' src='/img/client-1.svg' alt='' />
          <h3 className='h3 ml-15'>Raiffeisen bank</h3>
        </div>
        <p className='body mb-30'>
          Electronic registration greatly simplifies the process of buying an apartment in the primary market for clients.
          Instead of four stages, the client goes through two: he chooses an apartment from the developer and signs an
          agreement for participation in shared construction, and then he signs all the documents at the bank and sends them
          to Rosreestr for registration.
        </p>
        <div className='d-flex align-center'>
          <img className='mr-15' src='/img/avatar-1.png' alt='photo' />
          <span className='d-flex flex-column'>
            <strong className='agent-name'>Mathew Lovell</strong>
            <small className='agent-position'>Head of Credit Products Development Department</small>
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
          <strong className='metrics-data'>6 540</strong>
        </li>
        <div className='horizontal-divider'></div>
        <li className='metrics-item'>
          <small className='metrics-name'>Faster sales cycle</small>
          <strong className='metrics-data'>
            <span className='metrics-data-caption'>by </span>60%
          </strong>
        </li>
      </ul>
    </div>
  );
};
