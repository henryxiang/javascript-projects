import {observable, action, computed} from 'mobx'
import ObservableList from './observable-list'
import {ScheduleType} from './schedule'

class ScheduleList extends ObservableList {
  // @observable t = 0
  getSchedules(date) {
    // console.log("schedule: ", this.items[0])
    // console.log("date: ", date.toString())
    return this.items.filter(schedule => {
      // console.log("schedule date: ", schedule.startTime.year(), schedule.startTime.month(), schedule.startTime.date())
      switch(schedule.freq) {
        case ScheduleType.once:
          if (schedule.startTime.year() === date.year() &&
              schedule.startTime.month() === date.month() &&
              schedule.startTime.date() === date.date()
          )
            return schedule
          break
        case ScheduleType.daily:
          return schedule
          break
        case ScheduleType.weekly:
          if (schedule.startTime.day() === date.day())
            return schedule
          break
        case ScheduleType.biweekly:
          if (date.diff(schedule.startTime.day(), 'days') % 14 === 0)
            return schedule
          break
        case ScheduleType.monthly:
          if (schedule.startTime.date() === date.date())
            return schedule
          break
        case ScheduleType.yearly:
          if (schedule.startTime.month() === date.month() &&
              schedule.startTime.date() === date.date()
          )
            return schedule
          break
      }
    })
  }
}

export default ScheduleList
