import { createStore } from "redux";
// console.log(createStore);// is a method which takes 3 parameter in which reducer is madatory

// console.log(createStore); //createStore(reducer, preloadedState, enhancer)
const initialState = {
  post: 0,
  name: "harsh",
  age: 24,
};

const INCRENET = "post/increment";
const DECREMENT = "post/decrement";
const INCREASE_BY = "post/incrementBy";

console.log(createStore(reducer)); // this will return an object  with properties {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
// important getState , dispatch , subscribe

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// subscribe whenever there will action dispatch subscribe method will call automatically but it shoulld be before that dispatch
store.subscribe(() => {
  console.log(store.getState());
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCRENET:
      return { ...state, post: state.post + 1 };
    case DECREMENT:
      return { ...state, post: state.post - 1 };
    case INCREASE_BY:
      return { ...state, post: state.post + action.payload };
    default:
      return state;
  }
}

// console.log(store.getState());
// undefined if no initialState so we have to give initialState to state
// we call reducer through dispatch and redux behind the scens call the reducer and passes state and action

store.dispatch({ type: INCRENET });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREASE_BY, payload: 10 });
