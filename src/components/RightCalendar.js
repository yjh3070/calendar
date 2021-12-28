import React from 'react';
import './Calendar.css';
import Calendar from 'tui-calendar'; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";

const RightCalendar = () => {
  const calendarStyle = {
    height: '520px'
  }

  var calendar = new Calendar('#calendar', {
    defaultView: 'month',
    taskView: true,
    scheduleView: true,
    template: {
      monthDayname: function(dayname) {
        return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
      }
    },
    month: {
      daynames: ['일', '월', '화', '수', '목', '금', '토'],
      startDayOfWeek: 0,
      narrowWeekend: true
    }
  });
  
  calendar.createSchedules([
    {
      id: '1',
      calendarId: '1',
      title: "카페 투어",
      category: 'time',
      dueDateClass: '',
      start: new Date('2021-12-03T10:00:00'),
      end: new Date('2021-12-03T11:00:00')
    },
    {
      id: '2',
      calendarId: '1',
      title: "생일",
      category: 'time',
      dueDateClass: '',
      start: new Date('2021-12-12'),
      end: new Date('2021-12-12')
    },
    {
      id: '3',
      calendarId: '1',
      title: "누구랑 저녁 약속",
      category: 'time',
      dueDateClass: '',
      start: new Date('2021-12-17T21:00:00'),
      end: new Date('2021-12-17T22:00:00')
    },
    {
      id: '4',
      calendarId: '1',
      title: "스파이더맨 혼영",
      category: 'time',
      dueDateClass: '',
      start: new Date('2021-12-27T14:00:00'),
      end: new Date('2021-12-27T15:00:00')
    }
  ])

  return (
    <div id="rightCalendar">
      <div id="calendar" style={calendarStyle}></div>
    </div>
  );
};

export default RightCalendar;