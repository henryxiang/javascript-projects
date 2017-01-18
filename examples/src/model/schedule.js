import {observable, action, computed} from 'mobx'
import uniqueId from 'lodash/uniqueId'
import cloneDeep from 'lodash/cloneDeep'
import moment from 'moment'

export const ScheduleType = {
  once:     0,
  daily:    1,
  weekly:   2,
  biweekly: 3,
  monthly:  4,
  yearly:   5
}

class Schedule {
  @observable startTime = null // Moment object
  @observable endTime = null // Moment object
  @observable description = '' // String
  @observable freq = ScheduleType.once // int

  constructor() {
    // this._id = uniqueId()
    this.startTime = moment()
    this.endTime = moment()
  }

  clone() { return cloneDeep(this) }

  @action copyFrom(other) {
    this._id = other._id
    this.startTime = other.startTime
    this.endTime = other.endTime
    this.description = other.description
    this.freq = other.freq
  }

  @action setScheduleDate(date) {
    // console.debug("setScheduleDate:", date)
    const newTime = moment(date)
    if (!this.startTime) this.startTime = moment()
    this.startTime
      .year(newTime.year())
      .month(newTime.month())
      .date(newTime.date())

    if (!this.endTime) this.endTime = moment()
    this.endTime
      .year(newTime.year())
      .month(newTime.month())
      .date(newTime.date())
  }

  @action setScheduleTime(time) {
    const newTime = moment(time)
    if (!this.startTime) this.startTime = moment()
    this.startTime
      .hour(newTime.hour())
      .minute(newTime.minute())
  }

  @action setEndTime(time) {
    const newTime = moment(time)
    if (!this.endTime) this.endTime = moment()
    this.endTime
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
