import Image from 'next/image';
import integration from '../public/img/integration.png';

export const RegularSections = () => {
  return (
    <>
      <section className='section'>
        <div className='container'>
          <div className='two-col-left'>
            <div className='video-wrapper'>
              <video className='video' autoPlay loop muted playsInline>
                <source src='img/contracts.mp4' type='video/mp4' />
              </video>
            </div>
            <div className='description'>
              <h2 className='h2'>Digital real estate contracts</h2>
              <p className='body mt-25'>
                Secure real estate transactions. The widest coverage of registration actions: SEC, Purchase and Sale,
                Digital Mortgage.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='two-col-right'>
            <div className='description'>
              <h2 className='h2'>Simple and fast registry extracts</h2>
              <p className='body mt-25'>Convenient search for real estate, fast payment and decryption of documents.</p>
            </div>
            <div className='video-wrapper'>
              <video className='video' autoPlay loop muted playsInline>
                <source src='img/extracts.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='two-col-left'>
            <div className='video-wrapper'>
              <video className='video' autoPlay loop muted playsInline>
                <source src='img/availability.mp4' type='video/mp4' />
              </video>
            </div>
            <div className='description'>
              <h2 className='h2'>Availability</h2>
              <p className='body mt-25'>
                Support for all types of electronic signatures: cloud and physical. Reliable authorization with a password by
                SMS, Email. As in a bank, everything is on the client's device.
              </p>
              <div className='button light mt-25'>
                Learn more
                <svg
                  className='ml-10'
                  width='19'
                  height='16'
                  viewBox='0 0 19 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11.43 1.93005L17.5 8.00005L11.43 14.0701'
                    stroke='#4080FF'
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M1 8L17 8'
                    stroke='#4080FF'
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='two-col-right'>
            <div className='description'>
              <h2 className='h2'>Integration</h2>
              <p className='body mt-25'>
                API for system integration, for example, CRM or other familiar applications. Unique mechanism for signing
                documents without compromising keys.
              </p>
              <div className='button light mt-25'>
                Learn more
                <svg
                  className='ml-10'
                  width='19'
                  height='16'
                  viewBox='0 0 19 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11.43 1.93005L17.5 8.00005L11.43 14.0701'
                    stroke='#4080FF'
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M1 8L17 8'
                    stroke='#4080FF'
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            <div className='video-wrapper'>
              <Image src={integration} alt='' unoptimized />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
