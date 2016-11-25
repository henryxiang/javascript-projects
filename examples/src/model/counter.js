import {observable, action} from 'mobx'
import uniqueId from 'lodash/uniqueId'

class Counter {
  @observable count = 0

  constructor() {
    this.count = 0
    this._id = uniqueId()
  }

  @action increment() {
    this.count += 1
  }

  @action reset() {
    this.count = 0
  }
}

export default Counter
