import '../css/calendar.css'

import React from 'react'
import {observer} from 'mobx-react'
import moment from 'moment'
import uniqueId from 'lodash/uniqueId'
import sortBy from 'lodash/sortBy'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import {blue500} from 'material-ui/styles/colors';
import ScheduleEditorView from './schedule-editor'

@observer class CalendarView extends React.Component {

  iconStyle = {
    cursor: "pointer",
    marginLeft: 10,
    marginRight: 10
  }

  render() {
    const {calendar, scheduleList, editor} = this.props
    const {year, month} = calendar
    const firstDayOfMonth = moment(new Date(year, month-1, 1))
    const calendarHeader = firstDayOfMonth.format("YYYY MMMM")
    const days = this.getAllDaysInMonth(year, month)

    return (
      <div className='calendar'>
        <header>
          <b>{calendarHeader}</b>
        </header>
        <FontIcon className="fa fa-caret-left" style={this.iconStyle} onClick={(event) => {calendar.changeMonth(-1)}} />
        <FontIcon className="fa fa-caret-right" style={this.iconStyle} onClick={(event) => {calendar.changeMonth(1)}} />
        <FontIcon className="fa fa-plus" style={this.iconStyle} color={blue500} onClick={(event) => {editor.createNewSchedule()}} />
        <div className="calendar-body">
          {this.renderWeekHeader()}
          {days.map(week => this.renderWeekRow(week))}
        </div>
        <ScheduleEditorView editor={editor} scheduleList={scheduleList} />
      </div>
    )
  }

  renderWeekHeader() {
    return (
      <ul className='weekdays'>
        <li>Sunday</li>
        <li>Monday</li>
        <li>Tuesday</li>
        <li>Wednesday</li>
        <li>Thursday</li>
        <li>Friday</li>
        <li>Saturday</li>
      </ul>
    )
  }

  renderWeekRow(days) {
    return (
      <ul key={uniqueId('week_')} className='days'>
      {
        days.map(d => {
          if (d)
            return this.renderWeekday(d)
          else
            return this.renderWeekday("", "other-month")
        })
      }
      </ul>
    )
  }

  renderWeekday(day, type) {
    const {calendar, scheduleList, editor} = this.props
    const {year, month} = calendar
    const date = moment(new Date(year, month-1, day))
    const visibleSchedules = scheduleList.getSchedules(date) || []
    // console.log("Visible Schedules:", date.toString(), visibleSchedules.length)
    let liClassName = 'day'
    if (type) {
      liClassName += " " + type
    }
    return (
      <li key={uniqueId('day_')} className={liClassName}
          onContextMenu={(event) => {event.preventDefault(); editor.createNewSchedule(date)}}>
        <div className='date'>{day}</div>
        {day ? this.renderSchedules(visibleSchedules) : ''}
      </li>
    )
  }

  renderSchedules(visibleSchedules) {
    const {editor} = this.props
    const charLimit = 40
    const schedules = sortBy(visibleSchedules, s => s.startTime.toDate())
    return schedules.map(schedule => {
      // console.log(schedule)
      const {startTime, description} = schedule
      return (
        <div key={schedule._id} className='event'
             onClick={(event) => {event.preventDefault(); editor.editSchedule(schedule)}} >
          <div className="event-desc">
            {startTime.format("h:mmA ")}
            {description.length > charLimit ? description.substring(0, charLimit) + ' ...' : description}
          </div>
        </div>
      )
    })
  }

  getAllDaysInMonth(year, month) {
    let days = [],
        d = moment(new Date(year, month-1, 1)),
        nw = 0,
        week = [null, null, null, null, null, null, null]
    while (d.month() === month-1) {
      week[d.day()] = d.date()
      if (d.day() === 6) {
        days.push(week)
        week = [null, null, null, null, null, null, null]
      }
      d.add(1, 'days')
    }
    days.push(week)
    return days
  }

}

export default CalendarView
