export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-content'>
          <div className='d-flex align-center'>
            <span className='mr-15'>
              <svg width='38' height='36' viewBox='0 0 38 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M18 36C8.13987 36 0 27.925 0 18C0 8.075 8.02222 0 17.8824 0C27.7425 0 35.7647 8.075 35.7647 18L36 36L27 34V18C27 13.025 22.8248 9 17.8824 9C12.9399 9 8.94118 13.025 8.94118 18C8.94118 22.975 13.0575 27 18 27V36Z'
                  fill='#73A2FF'
                />
                <path
                  d='M20 36V27C24.9425 27 29.0589 22.975 29.0589 18V2L38 0V18C38 27.925 29.8601 36 20 36Z'
                  fill='#4080FF'
                />
              </svg>
            </span>
            <span className='logoname'>
              dig<span className='logoname-bold'>ēstate</span>
            </span>
          </div>
          <nav className='d-flex align-center'>
            <ul className='d-flex'>
              <li className='nav-item' tabIndex={1}>
                Banks
              </li>
              <li className='nav-item' tabIndex={2}>
                Developers
              </li>
              <li className='nav-item hide' tabIndex={3}>
                Contact us
              </li>
            </ul>
            <div className='button outline ml-40'>Sign Up</div>
          </nav>
        </div>
      </div>
    </header>
  );
};
