import {observable, action, computed} from 'mobx'
import uniqueId from 'lodash/uniqueId'
import cloneDeep from 'lodash/cloneDeep'
import moment from 'moment'

export const ScheduleType = {
  once: 0,
  daily: 1,
  weekly: 2,
  biweekly: 3,
  monthly: 4,
  yearly: 5
}

class Schedule {
  @observable startTime = null // a Moment object
  @observable duration = 0
  @observable description = ''
  @observable freq = ScheduleType.once

  constructor() {
    this._id = uniqueId()
  }

  clone() {
      return cloneDeep(this)
  }

  @action copyFrom(other) {
    this._id = other._id
    this.startTime = other.startTime
    this.duration = other.duration
    this.description = other.description
    this.freq = other.freq
  }

  @action setScheduleDate(date) {
    const editSchedule = this.schedule
    const newTime = moment(date)
    editSchedule
      .year(newTime.year())
      .month(newTime.month())
      .date(newTime.date())
  }

  @action setScheduleTime(time) {
    const editSchedule = this.schedule
    const newTime = moment(time)
    editSchedule
      .hour(newTime.hour())
      .minute(newTime.minute())
  }

  @computed get date() {
    if (this.startTime && moment(this.startTime).isValid()) {
      return this.startTime.toDate()
    }
    else {
      return new Date()
    }
  }

  @computed get time() {
    if (this.startTime && moment(this.startTime).isValid()) {
      return this.startTime.toDate()
    }
    else {
      return new Date()
    }
  }
}

export default Schedule
