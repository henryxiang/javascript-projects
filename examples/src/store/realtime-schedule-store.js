import {observable, action, computed} from 'mobx'
import io from 'socket.io-client'
import _ from 'lodash'
import moment from 'moment'
import Schedule, {ScheduleType} from '../model/schedule'

class RealTimeScheduleStore {
  /* a list containing object items */
  @observable items = []

  constructor(url, endPoint) {
    this.url = url
    this.endPoint = endPoint
    this.socket = io(url)
    this.msg = {
      // Outgoing CRUD messages
      create: `${endPoint}::create`,
      update: `${endPoint}::update`,
      remove: `${endPoint}::remove`,
      find:   `${endPoint}::find`,
      // Incoming event messages
      created: `${endPoint} created`,
      updated: `${endPoint} updated`,
      removed: `${endPoint} removed`,
    }
    this.registerRealTimeEventListner()
  }

  registerRealTimeEventListner() {
    this.socket.on(this.msg.created, (data) => {
      console.log("listener: item created =>\n", JSON.stringify(data, null, 2))
      this.addToCollection(data)
    })

    this.socket.on(this.msg.updated, (data) => {
      console.log("listener: item updated =>\n", JSON.stringify(data, null, 2))
      this.updateCollection(data)
    })

    this.socket.on(this.msg.removed, (data) => {
      console.log("listener: item removed =>\n", JSON.stringify(data, null, 2))
      this.removeFromCollection(data)
    })
  }

  @action addToCollection(data) {
    let schedule = new Schedule()
    schedule.copyFrom(data)
    //console.log("data: ", data)
    this.items.push(schedule)
  }

  @action updateCollection(data) {
    let index = _.findIndex(this.items, {_id: data._id})
    if (index >= 0) {
      this.items[index].copyFrom(data)
    }
  }

  @action removeFromCollection(data) {
    this.items = this.items.filter(i => i._id !== data._id)   
  }

  @action add(schedule) {
    this.socket.emit(this.msg.create, schedule.dumpData())   
  }

  @action remove(schedule) {
    this.socket.emit(this.msg.remove, schedule._id, {cascade: true})  
  }

  @action update(schedule) {
    this.socket.emit(this.msg.update, schedule._id, schedule.dumpData())
  }

  @action clear() {
    this.socket.emit(this.msg.remove, null, {cascade: true})
  }

  @action loadData(filter) {
    //console.log("filter: ", filter)
    this.socket.emit(this.msg.find, filter, 
      (error, data) => {
        if (!error) {
          console.log("load data =>\n", JSON.stringify(data, null, 2))
          for (let i = 0; i < data.total; i++) {
            this.addToCollection(data.data[i])
          }
        } else {
          console.error("data loading error: ", error)
        }
      }
    )
  }

  @computed get size() {
    return this.items.length
  }

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

  addMockSchedules() {
    const schedule1 = new Schedule()
    schedule1.startTime = moment()
    schedule1.startTime.date(1).hour(9).minute(0).second(0)
    schedule1.endTime = moment(schedule1.startTime).add(1, 'hours')
    schedule1.description = "Just a test."

    const schedule2= new Schedule()
    schedule2.startTime = moment()
    schedule2.startTime.date(1).hour(10).minute(30).second(0)
    schedule2.endTime = moment(schedule2.startTime).add(1, 'hours')
    schedule2.description = "This is another testing schedule with very long description."
   
    this.add(schedule1)
    this.add(schedule2)
  }
}

export default RealTimeScheduleStore