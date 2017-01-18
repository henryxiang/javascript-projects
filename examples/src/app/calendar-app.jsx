import React from 'react'
import CalendarView from '../view/calendar'
import Calendar from '../model/calendar'
import ScheduleEditor from '../model/schedule-editor'
// import ScheduleStore from '../store/schedule-store'
import ScheduleStore from '../store/realtime-schedule-store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const calendar = new Calendar()
const editor = new ScheduleEditor()
const scheduleList = new ScheduleStore('http://localhost:3030', 'schedules')
scheduleList.loadData()
//scheduleList.addMockSchedules()

class CalendarApp extends React.Component {
  render() {
      return (
        <MuiThemeProvider>
          <CalendarView calendar={calendar}
                        scheduleList={scheduleList}
                        editor={editor} />
        </MuiThemeProvider>
      )
  }
}

export default CalendarApp
