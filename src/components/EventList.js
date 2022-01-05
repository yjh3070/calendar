import React from 'react';
import './EventList.css';

const DoubleDigitFormat = (item) => {
  return ('0' + item).slice(-2);
}

const Event = ({ event }) => {
  const start = event.start;
  const end = event.end;
  const startHours = DoubleDigitFormat(start.getHours());
  const endHours = DoubleDigitFormat(end.getHours());
  const startMinutes = DoubleDigitFormat(start.getMinutes());
  const endMinutes = DoubleDigitFormat(end.getMinutes());
  
  const date = start.getDate();
  const time = startHours + ":" + startMinutes + " - " + endHours + ":" + endMinutes;
  const name = event.title;
  const color = "font-color-" + event.textColor;
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
        <div className="event-time font-color-gray">{event.category == "time" ? time : "하루종일"}</div>
        <div className="event-name font-color-black">{name}</div>
      </span>
    </div>
  )
}

const EventList = () => {

  const events =[
    {
      id: '1',
      calendarId: '0',
      title: "카페 투어",
      category: 'time',
      textColor: 'purple',
      start: new Date('2021-12-03T10:00:00'),
      end: new Date('2021-12-03T11:00:00')
    },
    {
      id: '2',
      calendarId: '0',
      title: "생일",
      category: 'allday',
      textColor: 'blue',
      start: new Date('2021-12-12'),
      end: new Date('2021-12-12')
    },
    {
      id: '3',
      calendarId: '0',
      title: "누구랑 저녁 약속",
      category: 'time',
      textColor: 'purple',
      start: new Date('2021-12-17T21:00:00'),
      end: new Date('2021-12-17T22:00:00')
    },
    {
      id: '4',
      calendarId: '0',
      title: "스파이더맨 혼영",
      category: 'time',
      textColor: 'green',
      start: new Date('2021-12-27T14:00:00'),
      end: new Date('2021-12-27T15:00:00')
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
          <Event event={event} key={event.id}/>
        ))}
      </div>
    </div>
  );
};

export default EventList;

//h2 태그 div 또는 다른 태그로 변경 후 텍스트 크기 조정하기
//circle, event-date는 사용자가 선택한 컬러로 background-color, font-color로 변경
//circle은 메인 컬러, event-date는 이벤트 컬러