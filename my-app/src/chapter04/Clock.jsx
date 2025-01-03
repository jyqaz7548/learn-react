import React, { useState, useEffect } from 'react';

function Clock(props) {
  const [date, setDate] = useState(new Date()); // 현재 시간을 저장할 state

  useEffect(() => {
    // 1초마다 setDate를 호출하여 state를 업데이트하는 timer 설정
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // 컴포넌트가 unmount될 때 timer를 정리하는 cleanup 함수 반환
    return () => clearInterval(timerID);
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 useEffect가 실행되도록 함

  return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;