import React, { Component} from 'react';
import Header from '../layout/Header';
import './Home.css';

export default class Home extends Component {
  // 타이핑 연출
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      index: 0,
      isTyping: true,
    };
  }

  componentDidMount() {
    this.typingEffect();
  }

  typingEffect = () => {
    const textToType = [
      '안녕하세요!',
      '새로운 변화에 두려워하지 않는',
      '신입 개발자 정은성입니다.'
    ];

    const typingSpeed = 100; // 글자가 나타나는 속도 (밀리초 단위)

    const intervalId = setInterval(() => {
      const { text, index, isTyping} = this.state;

      if (isTyping) {
        this.setState({ text: text + textToType[index].charAt(text.length) });

        if (text.length === textToType[index].length) {
        // 글자가 완전히 나타났으면 일정 시간 후에 지워짐
        setTimeout(() => {
          this.setState({ isTyping: false });
        }, 500);
      }
    } else {
      // 글자가 지워지는 중
      if (text.length === 0) {
        // 현재 문장이 지워진 상태이면 다음 문장으로 이동
        this.setState({
          isTyping: true,
          index: (index + 1) % textToType.length,
        });
      } else {
        // 현재 문장이 완전히 지워지지 않았으면 계속 지우기
        this.setState({ text: text.slice(0, -1) });
      }
    }
  }, typingSpeed);

  // 컴포넌트가 언마운트될 때 interval 정리
  this.intervalId = intervalId;
};

componentWillUnmount() {
  clearInterval(this.intervalId);
}

  render() {
    return (
      <div className='home'>
        <div className='top'>
          <Header></Header>
        </div>
        <div className='introduceWrap'>
          <div className='idphoto'>
            <img className='idPhoto' alt='img/IDphoto.jpg' src='img/IDphoto.jpg' />
          </div>
          <div className='introduce'>
            <h2>{this.state.text}</h2>
            {/* <h2>안녕하세요!</h2>
            <h2>새로운 변화에 두려워하지 않는 신입 개발자</h2>
            <h2>정은성 입니다.</h2> */}
          </div>
        </div>
      </div>
    );
  }
}
