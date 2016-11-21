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

  @action update(item) {
    this.item = this.items.map(i => {
      if (i._id === item.id)
        return item
      else
        return i
    })
  }

  @computed get size() {
    return this.items.length
  }
}

export default ObservableList
