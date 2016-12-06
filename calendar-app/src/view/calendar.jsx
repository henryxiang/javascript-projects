import '../css/calendar.css'

import React from 'react'
import {observer} from 'mobx-react'
import moment from 'moment'
import uniqueId from 'lodash/uniqueId'
import sortBy from 'lodash/sortBy'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'
import ScheduleEditorView from './schedule-editor'

@observer
class CalendarView extends React.Component {

  render() {
    const {calendar, scheduleList, editor} = this.props
    const year = calendar.year, month = calendar.month
    const calendarHeader = calendar.calendarTime.format("YYYY MMMM")
    const days = calendar.allDaysInMonth

    return (
      <div className='calendar'>
        <header>
          <b>{calendarHeader}</b>
        </header>
        <IconButton iconClassName="fa fa-caret-left"
                    tooltip="Previous month" tooltipPosition="top-center"
                    onClick={(event) => {calendar.changeMonth(-1)}} />
        <IconButton iconClassName="fa fa-caret-right"
                    tooltip="Next month" tooltipPosition="top-center"
                    onClick={(event) => {calendar.changeMonth(1)}} />
        <IconButton iconClassName="fa fa-calendar" iconStyle={{color:'#449eed'}}
                    tooltip="Current month" tooltipPosition="top-center"
                    onClick={(event) => {calendar.resetCalendar()}} />
        <IconButton iconClassName="fa fa-calendar-plus-o" iconStyle={{color:'#8ece88'}}
                    tooltip="New schedule" tooltipPosition="top-center"
                    onClick={(event) => {editor.createNewSchedule()}} />
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
            return this.renderWeekday(d, "day")
          else
            return this.renderWeekday("", "day other-month")
        })
      }
      </ul>
    )
  }

  renderWeekday(day, cssClass) {
    const {calendar, scheduleList, editor} = this.props
    const {year, month} = calendar
    const date = moment(new Date(year, month-1, day))
    const visibleSchedules = scheduleList.getSchedules(date) || []
    let dayView = day
    if (moment().diff(date, 'hours') < 24 && moment().diff(date, 'hours') >= 0)
      dayView = (<Avatar>{day}</Avatar>)
    // console.debug("Visible Schedules:", date.toString(), visibleSchedules.length)
    return (
      <li key={uniqueId('day_')} className={cssClass}
          onContextMenu={(event) => {event.preventDefault(); editor.createNewSchedule(date)}}>
        <div className='date'>{dayView}</div>
        {day ? this.renderSchedules(visibleSchedules) : ''}
      </li>
    )
  }

  renderSchedules(visibleSchedules) {
    const {editor} = this.props
    const charLimit = 40
    const schedules = sortBy(visibleSchedules, s => s.startTime.toDate())
    return schedules.map(schedule => {
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

}

export default CalendarView
