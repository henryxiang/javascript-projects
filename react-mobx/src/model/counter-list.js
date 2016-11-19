import {observable, action, computed} from 'mobx'
import Counter from './counter'

class CounterList {
  @observable counters = []
  counterId = 1

  @action addCounter() {
    const counter = new Counter(this.counterId++)
    this.counters.push(counter)
  }

  @action removeCounter(counter) {
    this.counters = this.counters.filter(c => c.id !== counter.id)
  }

  @computed get totalCount() {
    return this.counters.reduce((total, counter) => total + counter.count, 0)
  }

  @computed get numberOfCounters() {
    return this.counters.length;
  }
}

export default CounterList
