import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App"
import myApp from './reducers'

import { createStore } from 'redux';

let store = createStore(myApp);

const initialState = {
    photos: []
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'update':
        console.log("Updating photos array")
        return Object.assign({}, state, {
          photos: state.photos
        })
      default:
        return state
    }
  }

function render() {
    ReactDOM.render(<App/>, document.getElementById("app"))
}

store.subscribe(render);

render();

