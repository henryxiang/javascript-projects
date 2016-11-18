import {counterListAction} from '../actions/counter-list-action'

export default function counterListReducer(state = [], action) {
  switch(action.type) {
    case counterListAction.addCounter:
      return [...state, action.payload]
      break
    case counterListAction.removeCounter:
      return state.filter(counter => counter.id === action.payload.id)
      break
  }
}