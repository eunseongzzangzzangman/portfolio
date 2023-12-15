import './Home.css';
import React, { Component } from 'react';

export default class home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='homeicon'>
          <a href={`/`}>ES</a>
        </div>
        <div className='introduceWrap'>
          <div className='introduce'>
            <h2>안녕하세요!</h2>
            <h2>새로운 변화에 두려워하지 않는 신입 개발자</h2>
            <h2>정은성 입니다.</h2>
          </div>
        </div>
      </div>
    )
  }
}
