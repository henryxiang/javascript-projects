import {counterListAction} from './counter-list-action'

export addCounter = (counter) {
  return {
    type: counterListAction.addCounter,
    payload: counter
  }
}

export removeCounter = (counter) {
  return {
    type: counterListAction.removeCounter,
    payload: counter
  }
}