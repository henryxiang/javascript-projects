import React from 'react'

import CalendarView from './view/calendar'
import Calendar from './model/calendar'
import ScheduleEditor from './model/schedule-editor'
import ScheduleStore from './store/schedule-store'

const calendar = new Calendar()
const editor = new ScheduleEditor()
const scheduleList= new ScheduleStore().getSchedules()

class CalendarApp extends React.Component {
  render() {
      return (
        <CalendarView calendar={calendar}
                      scheduleList={scheduleList}
                      editor={editor} />
      )
  }
}

export default CalendarApp
