import {observable, action} from 'mobx'
//import uniqueId from 'lodash/uniqueId'

class Counter {
  @observable count = 0

  constructor(name) {
    this.count = 0
    //this._id = uniqueId()
    this.name = name || `Counter ${this._id}`
  }

  @action increment() {
    this.count += 1
  }

  @action reset() {
    this.count = 0
  }
}

export default Counter
