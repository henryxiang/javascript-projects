import React from 'react'
import moment from 'moment'
import CalendarView from './view/calendar'
import Calendar from './model/calendar'
import Schedule from './model/schedule'
import ScheduleEditor from './model/schedule-editor'
import ScheduleList from './model/schedule-list'


const calendar = new Calendar()
const scheduleList = new ScheduleList()
const schedule1 = new Schedule()
schedule1.startTime = moment()
schedule1.description = "Just a test"
scheduleList.add(schedule1)
const schedule2= new Schedule()
schedule2.startTime = moment().add(2, 'hours')
schedule2.description = "This is another schedule with very long description"
scheduleList.add(schedule2)

const editor = new ScheduleEditor()

class CalendarApp extends React.Component {
  render() {
      return (
        <CalendarView calendar={calendar} scheduleList={scheduleList} editor={editor}/>
      )
  }
}

export default CalendarApp
