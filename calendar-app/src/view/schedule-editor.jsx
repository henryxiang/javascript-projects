import React from 'react';
import {observer} from 'mobx-react'

// import Dialog from 'react-toolbox/lib/dialog'
// import Input from 'react-toolbox/lib/input'
// import Dropdown from 'react-toolbox/lib/dropdown'
// import DatePicker from 'react-toolbox/lib/date_picker'
// import TimePicker from 'react-toolbox/lib/time_picker'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import FlatButton from 'material-ui/FlatButton'

import uniqueId from 'lodash/uniqueId'
import moment from 'moment'

@observer class ScheduleEditor extends React.Component {
  freqType = [
    {value: 0, label: 'Once'},
    {value: 1, label: 'Daily'},
    {value: 2, label: 'Weekly'},
    {value: 3, label: 'Bi-Weekly'},
    {value: 4, label: 'Monthly'},
    {value: 5, label: 'Yearly'}
  ]

  labels = {
    scheduleDate: "Schedule Date",
    scheduleTime: "Schedule Time",
    description: "Description"
  }

  actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => {this.props.editor.isVisible = false}}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={() => {this.props.editor.isVisible = false}}
      />
  ]

  // constructor(props) {
  //   super(props)
  //   this.state = {...this.props.editor.schedule}
  // }

  render() {
    const {editor, scheduleList} = this.props
    const schedule = editor.schedule
    const {startTime, duration, description, freq} = this.props.editor.schedule
    // const {startTime, duration, description, freq} = this.state
    // this.setState({...this.props.editor.schedule})
    // console.log(editor, scheduleList)
    return (
      <Dialog actions={this.actions}
              open={editor.isVisible}
              title='Schedule Editor'>
        <DatePicker hintText={this.labels.scheduleDate}
                    floatingLabelText={this.labels.scheduleDate}
                    defaultDate={startTime.toDate()} />
        <TextField hintText={this.labels.description}
                   floatingLabelText={this.labels.description}
                   multiLine={true} rows={5}
                   defaultValue={description} />
        {/* <DatePicker label="Start Date"
                    value={startTime.toDate()}
                    onChange={this.handleDateTimeChange.bind(this, 'scheduleDate')} />
        <TimePicker label="Start Time"
                    value={startTime.toDate()}
                    format="ampm"
                    onChange={this.handleDateTimeChange.bind(this, 'scheduleTime')} />
        <Input label="Description"
               type="text"
               defaultValue={description}
               onChnage={this.handleTextInputChange.bind(this, 'description')} /> */}
      </Dialog>
    );
  }

  handleDateTimeChange = (name, value) => {
    // const editSchedule = this.props.editor.schedule
    // console.log(value, editSchedule)
    switch(name) {
      case 'scheduleDate':
        // editSchedule.setScheduleDate(value)
        this.setScheduleDate(value)
        break
      case 'scheduleTime':
        // editSchedule.setScheduleTime(value)
        this.setScheduleTime(value)
        break
    }
  }

  setScheduleDate(date) {
    const newTime = moment(date)
    const {startTime} = this.state
    startTime
      .year(newTime.year())
      .month(newTime.month())
      .date(newTime.date())
    this.setState({...this.state, startTime})
  }

  setScheduleTime(time) {
    const newTime = moment(time)
    const {startTime} = this.state
    startTime
      .hour(newTime.hour())
      .minute(newTime.minute())
    this.setState({...this.state, startTime})
  }

  handleTextInputChange = (name, value) => {
    // const editSchedule = this.props.editor.schedule
    // editSchedule[name] = value
    this.setState({...this.state, [name]: value})
  }

  saveSchedule() {
    const {editor, scheduleList} = this.props
    const {startTime, duration, freq, description} = this.state
    editor.schedule = {startTime, duration, freq, description}
    editor.saveTo(scheduleList)
  }
}

export default ScheduleEditor;
