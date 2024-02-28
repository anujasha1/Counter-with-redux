import {createStore} from "redux"

const INITAIL_VALUE = {
    counter: 0
}

const counterReducer = (store = INITAIL_VALUE, action) => {
    if (action.type === "INCREMENT") {
        return {counter: store.counter +1 }
    } else if (action.type === "DECREMENT") {
        return {counter: store.counter - 1}
    } else if (action.type === "ADD"){
        return {counter: store.counter + Number(action.payload.num)}
    } else if (action.type === "SUBTRACT"){
        return {counter: store.counter - Number(action.payload.num)}
    }

    return store
}

const counterStore = createStore(counterReducer)

export default counterStore