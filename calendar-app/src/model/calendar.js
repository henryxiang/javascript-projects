import {observable, action, computed} from 'mobx'
import moment from 'moment'

class Calendar {
  @observable calendarTime = moment()

  @action changeMonth(n) {
    const month = this.calendarTime.month()
    this.calendarTime = moment(this.calendarTime).month(month+n)
  }

  @action resetCalendar() {
    this.calendarTime = moment()
  }

  @computed get year() {
    return this.calendarTime.year()
  }

  @computed get month() {
    return this.calendarTime.month() + 1
  }

  /*
   * This is a helper function to generate a table (2D array)
   * of all dates in a month. The row represents week and
   * the column represents day of week (w/ Sunday indexed by 0).
   */
  @computed get allDaysInMonth() {
    let days = [],
        d = moment(this.calendarTime).date(1), // reset to the first day of month
        nw = 0,
        week = [null, null, null, null, null, null, null]
    while (d.month() === this.calendarTime.month()) {
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

export default Calendar
