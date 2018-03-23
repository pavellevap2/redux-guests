import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { createStore } from 'redux'

import rootReducer from '../src/reducers'
import RootContainer from './containers/RootContainer'

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('root'),
)
