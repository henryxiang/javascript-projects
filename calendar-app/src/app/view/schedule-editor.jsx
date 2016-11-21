import React from 'react';
import {observer} from 'mobx-react'
import Dialog from 'react-toolbox/lib/dialog'
import Input from 'react-toolbox/lib/input'
import Dropdown from 'react-toolbox/lib/dropdown'
import DatePicker from 'react-toolbox/lib/date_picker'
import TimePicker from 'react-toolbox/lib/time_picker'
import uniqueId from 'lodash/uniqueId'

@observer class ScheduleEditor extends React.Component {
  freqType = [
    {value: 0, label: 'Once'},
    {value: 1, label: 'Daily'},
    {value: 2, label: 'Weekly'},
    {value: 3, label: 'Bi-Weekly'},
    {value: 4, label: 'Monthly'},
    {value: 5, label: 'Yearly'}
  ]

  render() {
    const {editor, scheduleList} = this.props
    const schedule = editor.schedule
    const {startTime, duration, description, freq} = schedule
    return (
      <Dialog actions={this.actions}
              active={editor.isVisible}
              onEscKeyDown={editor.toggleVisible}
              title='Schedule Editor'>
              <DatePicker label="Start Date"
                          value={schedule.date}
                          onChange={this.handleDateTimeChange.bind(this, 'scheduleDate')} />
              <TimePicker label="Start Time"
                          value={schedule.time}
                          format="ampm"
                          onChange={this.handleDateTimeChange.bind(this, 'scheduleTime')} />
              <Input label="Description"
                     type="text"
                     defaultValue={schedule.description}
                     onChnage={this.handleTextInputChange.bind(this, 'description')} />
      </Dialog>
    );
  }

  actions = [
    { label: "Cancel", onClick: (event) => {this.props.editor.hide()} },
    { label: "Save", onClick: (event) => {this.props.editor.saveTo(this.props.scheduleList)} }
  ];

  handleDateTimeChange = (name, value) => {
    const editSchedule = this.props.editor.schedule
    switch(name) {
      case 'scheduleDate':
        editSchedule.setScheduleDate(value)
        break
      case 'scheduleTime':
        editSchedule.setScheduleTime(value)
        break
    }
  }

  handleTextInputChange = (name, value) => {
    const editSchedule = this.props.editor.schedule
    editSchedule[name] = value
  }

}

export default ScheduleEditor;
