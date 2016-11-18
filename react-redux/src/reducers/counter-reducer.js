import {counterAction} from '../actions/action-type'

export default function conter (state = 0, action) {
  switch(action.type) {
    case counterAction.increment:
      return state + 1
      break
    case counterAction.decrement:
      return state - 1
      break
    case counterAction.reset:
      return 0
      break
  }
}