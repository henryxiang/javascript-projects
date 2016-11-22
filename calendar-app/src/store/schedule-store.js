import moment from 'moment'
import Schedule from '../model/schedule'
import ScheduleList from '../model/schedule-list'

class ScheduleStore {

  getSchedules() {
    const scheduleList = new ScheduleList()

    const schedule1 = new Schedule()
    schedule1.startTime = moment()
    schedule1.startTime.minute(0).second(0)
    schedule1.endTime = moment(schedule1.startTime).add(1, 'hours')
    schedule1.description = "Just a test."
    scheduleList.add(schedule1)

    const schedule2= new Schedule()
    schedule2.startTime = moment().add(2, 'hours')
    schedule2.startTime.minute(0).second(0)
    schedule2.endTime = moment(schedule2.startTime).add(1, 'hours')
    schedule2.description = "This is another testing schedule with very long description."
    scheduleList.add(schedule2)

    return scheduleList
  }

}

export default ScheduleStore
