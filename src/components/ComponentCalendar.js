import React, { useEffect } from 'react';
import './Calendar.css';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
// import { useMediaQuery } from 'react-responsive';
import { ReactComponent as Cookie } from '../public/calendar_month_black_24dp.svg';

const ComponentCalendar = () => {
  const theme_config = {
    'common.border': '1px solid #E0E0E0',
    'common.holiday.color': '#673AB7',
    'common.saturday.color': '#673AB7',
    'common.today.color': '#673AB7',
    'common.dayname.color': '#673AB7',

    'month.dayname.height': '54px',
    'month.dayname.borderLeft': 'none',
    'month.dayname.backgroundColor': '#D1C4E9',
    'month.dayname.fontSize': '16px',
    'month.dayname.textAlign': 'center',

    'month.day.fontSize': '14px'
  };

  const calendar_options = {
    defaultView: 'month',
    view: 'month',
    height: '100%',
    month: {
      daynames: ['일', '월', '화', '수', '목', '금', '토'],
      startDayOfWeek: 0
    },
    schedules: [
      {
        id: '1',
        calendarId: '0',
        title: "카페 투어",
        category: 'time',
        dueDateClass: '',
        bgColor: '#673AB7',
        dragBgColor: '#673AB7',
        borderColor: '#673AB7',
        start: new Date('2021-12-03T10:00:00'),
        end: new Date('2021-12-03T11:00:00')
      },
      {
        id: '2',
        calendarId: '0',
        title: "생일",
        category: 'allday',
        dueDateClass: '',
        color: '#fff',
        bgColor: '#3F51B5',
        dragBgColor: '#3F51B5',
        borderColor: '#3F51B5',
        start: new Date('2021-12-12'),
        end: new Date('2021-12-12')
      },
      {
        id: '3',
        calendarId: '0',
        title: "누구랑 저녁 약속",
        category: 'time',
        dueDateClass: '',
        bgColor: '#673AB7',
        dragBgColor: '#673AB7',
        borderColor: '#673AB7',
        start: new Date('2021-12-17T21:00:00'),
        end: new Date('2021-12-17T22:00:00')
      },
      {
        id: '4',
        calendarId: '0',
        title: "어쩌구저쩌구 혼영",
        category: 'time',
        dueDateClass: '',
        bgColor: '#8BC34A',
        dragBgColor: '#8BC34A',
        borderColor: '#8BC34A',
        start: new Date('2021-12-27T14:00:00'),
        end: new Date('2021-12-27T15:00:00')
      }
    ],
    taskView: false,
    scheduleView: true,
    template: {
      milestone(schedule) {
        return `<span style="color:#fff;background-color: ${schedule.bgColor};">${
          schedule.title
        }</span>`;
      },
      milestoneTitle() {
        return 'Milestone';
      },
      allday(schedule) {
        return `${schedule.title}<i class="fa fa-refresh"></i>`;
      },
      alldayTitle() {
        return 'All Day';
      }
    },
    theme: theme_config
  };

  const calendar_ref = React.createRef();
  const current_month = React.createRef();
  const today = new Date();
  let calendar_instance;
  let calendar_date;
  
  const CalendarDateUpdate = () => {
    calendar_date = calendar_instance.getDate()._date;
    current_month.current.innerText = calendar_date.getFullYear() + "년 " + (calendar_date.getMonth() + 1) + "월";
  };
  
  const CalendarNextButton = () => {
    calendar_instance.next();
    CalendarDateUpdate();
  };

  const CalendarPrevButton = () => {
    calendar_instance.prev();
    CalendarDateUpdate();
  };

  useEffect(() => {
    calendar_instance = calendar_ref.current.getInstance();
  });

  return (
    <div id="rightCalendar">
      <div className="header">
        <Cookie className="calendar-svg" width="24" height="24"/>
        <span className="calendar-text" >Calendar</span>
      </div>
      <hr className="gray-line"></hr>
      <div className="calendar">
        <div className="calendar-header">
          <span ref={current_month} className="calendar-current-month">{today.getFullYear()}년 {today.getMonth()+1}월</span>
          <span className="calendar-button">
            <button onClick={CalendarPrevButton}>&lt;</button>
            <button onClick={CalendarNextButton}>&gt;</button>
          </span>
        </div>
        <Calendar ref={calendar_ref} {...calendar_options}/>
      </div>
    </div>
  )
};

export default ComponentCalendar;
