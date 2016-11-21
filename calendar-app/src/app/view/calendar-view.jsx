import css from '../theme/calendar.scss'

import React from 'react'
import {observer} from 'mobx-react'
import moment from 'moment'
import uniqueId from 'lodash/uniqueId'
import {Button, IconButton} from 'react-toolbox/lib/button'
import ScheduleEditor from './schedule-editor'

@observer class CalendarView extends React.Component {

  render() {
    const {calendar, scheduleList, editor} = this.props
    const {year, month} = calendar
    const firstDayOfMonth = moment(new Date(year, month-1, 1))
    const calendarHeader = firstDayOfMonth.format("YYYY MMMM")
    const days = this.getAllDaysInMonth(year, month)

    return (
      <div className={css.calendar}>
        <header>
          <h4>{calendarHeader}</h4>
        </header>
        <IconButton icon="fast_rewind" onClick={(event) => {calendar.changeMonth(-1)}} />
        <IconButton icon="fast_forward" onClick={(event) => {calendar.changeMonth(1)}} />
        <IconButton icon="add" primary onClick={(event) => {editor.clear(); editor.show()}} />
        <div className={css["calendar-body"]}>
          {this.renderWeekHeader()}
          {days.map(week => this.renderWeekRow(week))}
        </div>
        <ScheduleEditor editor={editor} scheduleList={scheduleList} />
      </div>
    )
  }

  renderWeekHeader() {
    return (
      <ul className={css.weekdays}>
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
      <ul key={uniqueId('week_')} className={css.days}>
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
    const {calendar, scheduleList} = this.props
    const {year, month} = calendar
    const date = moment(new Date(year, month-1, day))
    const visibleSchedules = scheduleList.getSchedules(date) || []
    // console.log("Visible Schedules:", date.toString(), visibleSchedules.length)
    let liClassName = css.day
    if (type) {
      liClassName += " " + css[type]
    }
    return (
      <li key={uniqueId('day_')} className={liClassName}>
        <div className={css.date}>{day}</div>
        {this.renderSchedules(visibleSchedules)}
      </li>
    )
  }

  renderSchedules(visibleSchedules) {
      const {editor} = this.props
      const charLimit = 40
      return visibleSchedules.map(schedule => {
        // console.log(schedule)
        const {startTime, description} = schedule
        return (
          <div key={schedule._id} className={css.event}
               onClick={(event) => {editor.setSchedule(schedule); editor.show()}} >
            <div className={css["event-desc"]}>
              {startTime.format("h:ma ")}
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
