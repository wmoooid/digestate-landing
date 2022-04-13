import React from 'react';
import { FirstCase } from './FirstCase';
import { SecondCase } from './SecondCase';
import { ThirdCase } from './ThirdCase';

const CASES = [FirstCase, SecondCase, ThirdCase];

export const SectionCases = () => {
  const [currentCaseList, setCurrentCaseList] = React.useState(0);
  const [currentCase, setCurrentCase] = React.useState(0);
  const Case = CASES[currentCase];

  const [isFading, setIsFading] = React.useState(false);

  function handleClick(index: number) {
    if (index === currentCase) return;
    setIsFading(true);
    setCurrentCaseList(index);
    setTimeout(() => {
      setCurrentCase(index);
      setIsFading(false);
    }, 200);
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
              className={currentCaseList === 0 ? 'cases-item active' : 'cases-item'}>
              <img className='customer-icon-small' src='/img/client-1.svg' alt='' />
              <small className='customer-name-small'>Raiffeisen bank</small>
            </li>
            <li
              onClick={() => {
                handleClick(1);
              }}
              className={currentCaseList === 1 ? 'cases-item active' : 'cases-item'}>
              <img className='customer-icon-small' src='/img/client-2.svg' alt='' />
              <small className='customer-name-small'>V-Estate</small>
            </li>
            <li
              onClick={() => {
                handleClick(2);
              }}
              className={currentCaseList === 2 ? 'cases-item active' : 'cases-item'}>
              <img className='customer-icon-small' src='/img/client-3.svg' alt='' />
              <small className='customer-name-small'>Unique Property</small>
            </li>
          </ul>
          <div className={isFading ? 'case-content animation-fade now' : 'case-content animation-fade'}>
            <Case />
          </div>
        </div>
      </div>
    </section>
  );
};
