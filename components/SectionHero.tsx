import Image from 'next/image';
import phone from '../public/img/hero-phone.png';

export const SectionHero = () => {
  return (
    <section className='section-hero'>
      <div className='container'>
        <div className='hero-content'>
          <div className='left-side'>
            <h1 className='h1'>
              Digital real estate <br /> registration service
            </h1>
            <p className='description'>for banks, developers and real estate agencies.</p>
            <ul className='benefits'>
              <li className='item'>
                <span className='icon'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M19.14 19.5C20.91 17.7 22 15.22 22 12.5C22 6.98 17.52 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 15.22 3.08 17.68 4.84 19.49'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 21.5002C13.8667 21.5002 15.38 19.987 15.38 18.1202C15.38 16.2535 13.8667 14.7402 12 14.7402C10.1333 14.7402 8.62 16.2535 8.62 18.1202C8.62 19.987 10.1333 21.5002 12 21.5002Z'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15.25 12H16C16.82 12 17.5 11.33 17.5 10.5C17.5 9.68 16.82 9 16 9C15.18 9 14.5 9.67 14.5 10.5V11.25C14.5 11.66 14.84 12 15.25 12Z'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <small className='body'>4x faster than MFC</small>
              </li>
              <li className='item'>
                <span className='icon'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M2 9V6.5C2 4.01 4.01 2 6.5 2H9'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15 2H17.5C19.99 2 22 4.01 22 6.5V9'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M22 16V17.5C22 19.99 19.99 22 17.5 22H16'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9 22H6.5C4.01 22 2 19.99 2 17.5V15'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18Z'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15.5 18C16.8807 18 18 16.8807 18 15.5C18 14.1193 16.8807 13 15.5 13C14.1193 13 13 14.1193 13 15.5C13 16.8807 14.1193 18 15.5 18Z'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <small className='body'>CRM integration</small>
              </li>
              <li className='item'>
                <span className='icon'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M10.49 2.23006L5.5 4.10005C4.35 4.53005 3.41 5.89004 3.41 7.12004V14.55C3.41 15.73 4.19001 17.28 5.14001 17.99L9.44 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12004C20.61 5.89004 19.67 4.53005 18.52 4.10005L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 10.9199C11.96 10.9199 11.91 10.9199 11.87 10.9199C10.93 10.8899 10.18 10.1099 10.18 9.15991C10.18 8.18991 10.97 7.3999 11.94 7.3999C12.91 7.3999 13.7 8.18991 13.7 9.15991C13.69 10.1199 12.94 10.8899 12 10.9199Z'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10.01 13.7199C9.05001 14.3599 9.05001 15.4099 10.01 16.0498C11.1 16.7799 12.89 16.7799 13.98 16.0498C14.94 15.4099 14.94 14.3599 13.98 13.7199C12.9 12.9899 11.11 12.9899 10.01 13.7199Z'
                      stroke='#26404D'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <small className='body'>Full compliance with FL</small>
              </li>
            </ul>
            <div className='buttons'>
              <div className='button accent hero'>Sign Up</div>
              <div className='button transperent'>Get Consultation</div>
            </div>
          </div>
          <div className='phone'>
            <Image src={phone} alt='' priority />
            <div className='popup'>
              <div className='heading'>Living Waters House</div>
              <div className='text'>
                Living Waters is a unit where nature, tranquillity and calmness embrace. There is enough space for six guests
                and plenty of space. The house overlooks a magnificent 27 hectare-sized trout dam creating a breathtaking
                picture during the cold months with mist over the lake.
              </div>
              <div className='point'>
                <span>
                  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M6.66673 18.3333H13.3334C16.6834 18.3333 17.2834 16.9917 17.4584 15.3583L18.0834 8.69167C18.3084 6.65833 17.7251 5 14.1667 5H5.83339C2.27506 5 1.69173 6.65833 1.91673 8.69167L2.54173 15.3583C2.71673 16.9917 3.31673 18.3333 6.66673 18.3333Z'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M6.66687 4.99935V4.33268C6.66687 2.85768 6.66687 1.66602 9.33354 1.66602H10.6669C13.3335 1.66602 13.3335 2.85768 13.3335 4.33268V4.99935'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M11.6665 10.8333V11.6667C11.6665 11.675 11.6665 11.675 11.6665 11.6833C11.6665 12.5917 11.6581 13.3333 9.9998 13.3333C8.3498 13.3333 8.33313 12.6 8.33313 11.6917V10.8333C8.33313 10 8.33313 10 9.16646 10H10.8331C11.6665 10 11.6665 10 11.6665 10.8333Z'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M18.0419 9.16602C16.1169 10.566 13.9169 11.3993 11.6669 11.6827'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M2.18323 9.3916C4.05823 10.6749 6.17489 11.4499 8.33323 11.6916'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <span className='icon-text'>Zeon Real Estate</span>
              </div>
              <div className='point'>
                <span>
                  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M10.3085 1.79219L17.8085 4.79217C18.1002 4.90883 18.3335 5.25883 18.3335 5.56716V8.33383C18.3335 8.79217 17.9585 9.16717 17.5002 9.16717H2.5002C2.04187 9.16717 1.66687 8.79217 1.66687 8.33383V5.56716C1.66687 5.25883 1.90021 4.90883 2.19187 4.79217L9.69188 1.79219C9.85854 1.72552 10.1419 1.72552 10.3085 1.79219Z'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M18.3335 18.3333H1.66687V15.8333C1.66687 15.375 2.04187 15 2.5002 15H17.5002C17.9585 15 18.3335 15.375 18.3335 15.8333V18.3333Z'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M3.33313 14.9998V9.1665'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M6.66687 14.9998V9.1665'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10 14.9998V9.1665'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M13.3331 14.9998V9.1665'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16.6669 14.9998V9.1665'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M0.83313 18.3335H19.1665'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10 7.0835C10.6904 7.0835 11.25 6.52385 11.25 5.8335C11.25 5.14314 10.6904 4.5835 10 4.5835C9.30964 4.5835 8.75 5.14314 8.75 5.8335C8.75 6.52385 9.30964 7.0835 10 7.0835Z'
                      stroke='#607580'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <span className='icon-text'>UniCredit Bank</span>
              </div>
              <div className='phone-button'>Register the contract</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
