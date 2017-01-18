import Schedule from './schedule'
import {observable, action} from 'mobx'
import findIndex from 'lodash/findIndex'
import moment from 'moment'

class ScheduleEditor {
  @observable isVisible = false
  @observable schedule = null

  constructor() {
    this.isVisible = false
    this.schedule = new Schedule()
  }

  @action toggleVisible() {
    this.isVisible = !this.isVisible
  }

  @action createNewSchedule(date=moment()) {
    if (date.isAfter(moment().subtract(24, 'hours'))) {
      this.schedule = new Schedule()
      this.schedule.startTime = moment(date)
      this.schedule.endTime = moment(date)
      this.isVisible = true
    }
  }

  @action cancelEditing() {
    this.schedule = new Schedule()
    this.isVisible = false
  }

  @action editSchedule(schedule) {
    this.schedule = schedule
    this.isVisible = true
  }

  @action saveTo(scheduleList) {
    console.debug("saveTo ", this.schedule, scheduleList)
    // if (findIndex(scheduleList, s => s._id === this.schedule._id) >= 0)
    if (this.schedule._id) {
      console.debug("updating...")
      scheduleList.update(this.schedule)
    } else {
      console.debug("saving...")
      scheduleList.add(this.schedule)
    }
    this.isVisible = false
  }
}

export default ScheduleEditor
