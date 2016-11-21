import Schedule from './schedule'
import {observable, action} from 'mobx'
import findIndex from 'lodash/findIndex'

class ScheduleEditor {
  @observable isVisible = false
  @observable schedule = new Schedule()

  @action toggleVisible() {
    this.isVisible = !this.isVisible
  }

  @action setSchedule(schedule) {
    this.schedule.copyFrom(schedule)
    // this.isVisible = true
  }

  @action saveTo(scheduleList) {
    if (findIndex(scheduleList, s => s._id === this.schedule._id) >= 0)
      scheduleList.update(this.schedule)
    else
      scheduleList.add(this.schedule)
  }

  @action clear() {
    this.schedule = new Schedule()
  }

  @action show() {
    this.isVisible = true
  }

  @action hide() {
    this.isVisible = false
  }
}

export default ScheduleEditor
