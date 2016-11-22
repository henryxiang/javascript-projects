import {observable, action, computed} from 'mobx'
import ObservableList from './observable-list'
import {ScheduleType} from './schedule'

class ScheduleList extends ObservableList {
  /*
   * This function returns all schedules on a given date.
   */
  getSchedules(date) {
    // console.debug("schedule: ", this.items[0])
    // console.debug("date: ", date.toString())
    return this.items.filter(schedule => {
      // console.debug("schedule date: ", schedule.startTime.year(), schedule.startTime.month(), schedule.startTime.date())
      if (schedule.startTime.year() === date.year() &&
          schedule.startTime.month() === date.month() &&
          schedule.startTime.date() === date.date()
      ) return schedule

      switch(schedule.freq) {
        case ScheduleType.daily:
          if (date.isSameOrAfter(schedule.startTime)) return schedule
          break
        case ScheduleType.weekly:
          if (date.isSameOrAfter(schedule.startTime) &&
              schedule.startTime.day() === date.day()
          ) return schedule
          break
        case ScheduleType.biweekly:
          if (date.isSameOrAfter(schedule.startTime) &&
             (date.diff(schedule.startTime, 'days')+1) % 14 === 0
          ) return schedule
          break
        case ScheduleType.monthly:
          if (date.isSameOrAfter(schedule.startTime) &&
              schedule.startTime.date() === date.date()
          ) return schedule
          break
        case ScheduleType.yearly:
          if (date.isSameOrAfter(schedule.startTime) &&
              schedule.startTime.month() === date.month() &&
              schedule.startTime.date() === date.date()
          ) return schedule
          break
      }
    })
  }
}

export default ScheduleList
