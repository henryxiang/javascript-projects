import {observable, action, computed} from 'mobx'

class ObservableList {
  /* a list containing object items */
  @observable items = []

  @action add(item) {
    this.items.push(item)
  }

  @action remove(item) {
    this.items = this.items.filter(i => i._id !== item._id)
  }

  @action clear() {
    this.items = []
  }
  
  @computed get size() {
    return this.items.length
  }
}

export default ObservableList
