import { applyMiddleware, createStore } from "redux"
import logger from 'redux-logger'



const store =createStore(
    counterReducer,
  applyMiddleware(logger)
)


function counterReducer(state = { value: 0 }, action:any) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
  }

  

  store.subscribe(() => console.log(store.getState()))

  store.dispatch({ type: 'counter/incremented' })

export default store