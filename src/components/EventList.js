import React from 'react';
import './EventList.css';

function DoubleDigitFormat(item){
  return ('0' + item).slice(-2);
}

function Evnet({ event }) {
  const startTime = event.startTime;
  const endTime = event.endTime;
  const startHours = DoubleDigitFormat(startTime.getHours());
  const endHours = DoubleDigitFormat(endTime.getHours());
  const startMinutes = DoubleDigitFormat(startTime.getMinutes());
  const endMinutes = DoubleDigitFormat(endTime.getMinutes());
  
  const date = startTime.getDate();
  const time = startHours + ":" + startMinutes + " - " + endHours + ":" + endMinutes;
  const name = event.name;
  const color = "font-color-" + event.color;
  let digit;

  if(date < 10){
    digit = "single-digit";
  }else{
    digit = "double-digit";
  }

  return (
    <div className="event">
      <h1 className={color +" event-date"}>{date}</h1>
      <span className={digit}>
        <div className="event-time font-color-gray">{time}</div>
        <div className="event-name font-color-black">{name}</div>
      </span>
    </div>
  )
}

const EventList = () => {

  const events =[
    {
        id: 1,
        color: 'purple',
        startTime: new Date('2021-12-03T10:00:00'),
        endTime: new Date('2021-12-03T11:00:00'),
        name: "카페 투어"
    },
    {
        id: 2,
        color: 'blue',
        startTime: new Date('2021-12-12'),
        endTime: new Date('2021-12-12'),
        name: "생일"
    },
    {
        id: 3,
        color: 'purple',
        startTime: new Date('2021-12-17T21:00:00'),
        endTime: new Date('2021-12-17T22:00:00'),
        name: "누구랑 저녁 약속"
    },
    {
      id: 4,
      color: 'green',
      startTime: new Date('2021-12-27T14:00:00'),
      endTime: new Date('2021-12-27T15:00:00'),
      name: "스파이더맨 혼영"
    }
  ]

  return (
    <div id="EventList">
      <div className="user">
        <div className="circle color-purple"></div>
        <h2>Jung's Calendar</h2>
      </div>
      <div className="event-list">
        <h1>이달의 이벤트</h1>
        {events.map(event => (
          <Evnet event={event} key={event.id}/>
        ))}
      </div>
    </div>
  );
};

export default EventList;

//h2 태그 div 또는 다른 태그로 변경 후 텍스트 크기 조정하기
//circle, event-date는 사용자가 선택한 컬러로 background-color, font-color로 변경
//circle은 메인 컬러, event-date는 이벤트 컬러