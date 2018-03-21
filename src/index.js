import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root/Root';

import {createStore} from "redux";

import app from "../src/reducers/index";

let store = createStore(app);

const render =  () => ReactDOM.render(
    <Root
        inputValue = {store.getState().handleInput}
        handleInput = {(e) => store.dispatch({type: "HANDLE_INPUT", data: e.target.value})}
        addGuest = {(e) => {
            if (e.key == "Enter") {
                store.dispatch({type : "ADD_GUEST", data: store.getState().handleInput})
            }
        }}

        guests = {store.getState().guests}
        removeGuest = {(i) => store.dispatch({type: "REMOVE_GUEST", index: i,
            guests:store.getState().guests})}
    />,
    document.getElementById("root"));

render();
store.subscribe(render);