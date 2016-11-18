import {counterAction} from './action-type'

export const incrementCounter = () => {
  return {
    type: counterAction.increment
  }
} 

export const decrementCounter = () => {
  return {
    type: counterAction.decrement
  }
}

export const resetCounter = () => {
  return {
    type: counterAction.reset
  }
}