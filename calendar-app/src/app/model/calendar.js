import {observable, action, computed} from 'mobx'
import moment from 'moment'

class Calendar {
  @observable year = moment().year()
  @observable month = moment().month() + 1

  @action changeMonth(n) {
    const firstDayOfMonth = moment(new Date(this.year, this.month-1, 1)).add(n, 'months')
    // console.log(firstDayOfMonth.toString())
    this.year = firstDayOfMonth.year()
    this.month = firstDayOfMonth.month() + 1
    // console.log(this.year, this.month)
  }
}

export default Calendar
