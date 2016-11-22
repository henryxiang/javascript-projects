import React from 'react';
import {observer} from 'mobx-react'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import FlatButton from 'material-ui/FlatButton'
import uniqueId from 'lodash/uniqueId'
import moment from 'moment'

@observer class ScheduleEditorView extends React.Component {
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
    description: "Description",
    frequency: "Frequency"
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

  styles = {
    dateTime: {
      display: 'inline-block',
      margin: 5
    }
  }

  render() {
    const {editor, scheduleList} = this.props
    const schedule = editor.schedule
    const {startTime, duration, description, freq} = this.props.editor.schedule
    // const {startTime, duration, description, freq} = this.state
    // this.setState({...this.props.editor.schedule})
    // console.log(editor, scheduleList)
    return (
      <Dialog title='Schedule Editor' actions={this.actions} open={editor.isVisible}>

          <DatePicker hintText={this.labels.scheduleDate}
                      floatingLabelText={this.labels.scheduleDate}
                      style={this.styles.dateTime}
                      defaultDate={startTime.toDate()} />
          <TimePicker hintText={this.labels.scheduleTime}
                      floatingLabelText={this.labels.scheduleTime}
                      style={this.styles.dateTime}
                      defaultTime={startTime.toDate()} />
          <SelectField hintText={this.labels.frequency}
                       floatingLabelText={this.labels.frequency}
                       value={freq}
                       autoWidth={true}>
             {
               this.freqType.map(t => <MenuItem key={t.value} value={t.value} primaryText={t.label} />)
             }
          </SelectField>
          <TextField hintText={this.labels.description}
                     floatingLabelText={this.labels.description}
                    //  multiLine={true} rows={5}
                     defaultValue={description} />
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

export default ScheduleEditorView;