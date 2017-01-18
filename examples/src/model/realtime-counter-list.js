import {observable, action, computed} from 'mobx'
import io from 'socket.io-client'
import _ from 'lodash'
import Counter from './counter'

class RealTimeCounterList {
  /* a list containing object items */
  @observable items = []

  constructor(url, endPoint) {
    this.url = url
    this.endPoint = endPoint
    this.socket = io(url)
    this.msg = {
      create: `${endPoint}::create`,
      update: `${endPoint}::update`,
      remove: `${endPoint}::remove`,
      find:   `${endPoint}::find`,
      created: `${endPoint} created`,
      updated: `${endPoint} updated`,
      removed: `${endPoint} removed`,
    }
    this.registerRealTimeEventListner()
  }

  registerRealTimeEventListner() {
    this.socket.on(this.msg.created, (data) => {
      console.log("listener: item created =>\n", JSON.stringify(data, null, 2))
      this.addToCollection(data)
    })

    this.socket.on(this.msg.updated, (data) => {
      console.log("listener: item updated =>\n", JSON.stringify(data, null, 2))
      this.updateCollection(data)
    })

    this.socket.on(this.msg.removed, (data) => {
      console.log("listener: item removed =>\n", JSON.stringify(data, null, 2))
      this.removeFromCollection(data)
    })
  }

  @action addToCollection(data) {
    let counter = new Counter()
    counter._id = data._id
    counter.name = data.name
    counter.count = data.count
    console.log("counter: ", counter)
    this.items.push(counter)
  }

  @action updateCollection(data) {
    let index = _.findIndex(this.items, {_id: data._id})
    if (index >= 0) {
      this.items[index].name = data.name
      this.items[index].count = data.count
    }
  }

  @action removeFromCollection(data) {
    this.items = this.items.filter(i => i._id !== data._id)   
  }

  @action add(counter) {
    this.socket.emit(this.msg.create, {name: counter.name, count: counter.count})   
  }

  @action remove(counter) {
    this.socket.emit(this.msg.remove, counter._id, {cascade: true})  
  }

  @action update(counter) {
    this.socket.emit(this.msg.update, counter._id, counter)
  }

  @action clear() {
    this.socket.emit(this.msg.remove, null, {cascade: true})    
  }

  @action loadData(filter) {
    //console.log("filter: ", filter)
    this.socket.emit(this.msg.find, filter, 
      (error, data) => {
        if (!error) {
          //console.log("load data =>\n", JSON.stringify(data, null, 2))
          this.addToCollection(data.data[0])
        } else {
          console.error("data loading error: ", error)
        }
      }
    )
  }

  @computed get size() {
    return this.items.length
  }
}

export default RealTimeCounterList