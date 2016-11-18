import {observable, action} from 'mobx'

class Counter {
  @observable count = 0

  constructor(id) {
    this.count = 0
    this.id = id
  }

  @action increment() {
    this.count += 1
  }

  @action reset() {
    this.count = 0
  }
}

export default Counter
