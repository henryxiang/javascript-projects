import {observable, action, computed} from 'mobx'
import Counter from './counter'

class CounterList {
  /* a list containing Counter objects */
  @observable counters = []

  @action addCounter() {
    this.counters.push(new Counter())
  }

  @action removeCounter(counter) {
    this.counters = this.counters.filter(c => c._id !== counter._id)
  }

  @computed get totalCount() {
    return this.counters.reduce((total, counter) => total + counter.count, 0)
  }

  @computed get numberOfCounters() {
    return this.counters.length
  }

  /*
   * If an observer uses this function, it will be automatically called whenever
   * the observable 'counters' changes.
   */
  getSortedCounters(order="desc") {
    const m = order === "desc" ? -1 : 1
    return this.counters.sort((a,b) => a.count >= b.count ? 1*m : -1*m)
  }
}

export default CounterList
