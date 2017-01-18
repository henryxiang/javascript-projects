import {observable, action, computed} from 'mobx'
import io from 'socket.io-client'
import _ from 'lodash'

class RealTimeObservableList {
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
    this.items.push(data)
  }

  @action updateCollection(data) {
    this.items = this.items.map(i => {
      if (i._id === data._id)
        return data
      else
        return i
    })
  }

  @action removeFromCollection(data) {
    this.items = this.items.filter(i => i._id !== data._id)   
  }

  @action add(item) {
    this.socket.emit(this.msg.create, item,
      (error, data) => {
        if(!error) {
          //console.log("item created =>\n", JSON.stringify(data, null, 2))
          item._id = data._id
          this.items.push(item)
        } else {
          console.error("item creation error: ", error)
        }     
      }
    )   
  }

  @action remove(item) {
    this.socket.emit(this.msg.remove, item._id, {cascade: true},
      (error, data) => {
        if (!error) {
          console.log("item deleted =>\n", JSON.stringify(data, null, 2))
          this.items = this.items.filter(i => i._id !== item._id)  
        } else {
          console.error("item deletion error: ", error)
        }
      }
    )  
  }

  @action update(item) {
    this.socket.emit(this.msg.update, item._id, item,
      (error, data) => {
        if (!error) {
          console.log("item updated =>\n", JSON.stringify(data, null, 2))
          this.items = this.items.map(i => {
            if (i._id === item.id)
              return item
            else
              return i
          })
        } else {
          console.error("item updating error: ", error)  
        }
      }
    )
  }

  @action clear() {
    this.socket.emit(this.msg.remove, null, {cascade: true},
      (error, data) => {
        if (!error) {
          console.log("all items deleted")
          this.items = []
        } else {
          console.error("item deletion error: ", error)
        }
      }
    )    
  }

  @computed get size() {
    return this.items.length
  }

  exists(item) {
    return _.findIndex(this.items, {_id: item._id}) >= 0
  }

  @action loadData(filter) {
    this.socket.emit(this.msg.find, filter, 
      (error, data) => {
        if (!error) {
          console.log("load data =>\n", JSON.stringify(data, null, 2))
          this.items.push(data)
        } else {
          console.error("data loading error: ", error)
        }
      }
    )
  }
}

export default RealTimeObservableList