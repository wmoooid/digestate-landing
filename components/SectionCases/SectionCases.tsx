import React from 'react';
import { FirstCase } from './FirstCase';
import { SecondCase } from './SecondCase';
import { ThirdCase } from './ThirdCase';

const CASES = [FirstCase, SecondCase, ThirdCase];

export const SectionCases = () => {
  const [currentCase, setCurrentCase] = React.useState(0);
  const Case = CASES[currentCase];

  function handleClick(index: number) {
    setCurrentCase(index);
  }

  // function nextCase() {
  //   if (currentCase === CASES.length - 1) {
  //     setCurrentCase(0);
  //   } else {
  //     setCurrentCase(currentCase + 1);
  //   }
  // }

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     nextCase();
  //   }, 1000);
  // }, [currentCase]);

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='h2 mb-50'>Сustomer cases</h2>
        <div className='customer-cases'>
          <ul className='cases-list'>
            <li
              onClick={() => {
                handleClick(0);
              }}
              className={currentCase === 0 ? 'cases-item active' : 'cases-item'}>
              <img className='customer-icon-small' src='/img/client-1.svg' alt='' />
              <small className='customer-name-small'>Raiffeisen bank</small>
            </li>
            <li
              onClick={() => {
                handleClick(1);
              }}
              className={currentCase === 1 ? 'cases-item active' : 'cases-item'}>
              <img className='customer-icon-small' src='/img/client-2.svg' alt='' />
              <small className='customer-name-small'>V-Estate</small>
            </li>
            <li
              onClick={() => {
                handleClick(2);
              }}
              className={currentCase === 2 ? 'cases-item active' : 'cases-item'}>
              <img className='customer-icon-small' src='/img/client-3.svg' alt='' />
              <small className='customer-name-small'>Unique Property</small>
            </li>
          </ul>
          <Case />
        </div>
      </div>
    </section>
  );
};
