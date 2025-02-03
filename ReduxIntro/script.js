import { createStore } from "redux";
// console.log(createStore);// is a method which takes 3 parameter in which reducer is madatory
const initialState = {
  post: 0,
  name: "harsh",
  age: 24,
};
const INCRENET = "post/increment";
const DECREMENT = "post/decrement";
const INCREASE_BY = "post/incrementBy";

const store = createStore(reducer); // it will return something which we are storing in store varaiable variable name can be anything generally usko store name hi dete hain

// subscribe whenever there will action dispatch subscribe method will call

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
console.log(store); // this will give us store with properties {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
// important getState , dispatch , subscribe

// console.log(store.getState());
// undefined if no initialState so we have to give initialState to state

// behind the scen the redux call the reducer and passes currentState and action

// we call reducer through dispatch and re dux behind the scens call the reducer

store.dispatch({ type: INCRENET });
// console.log(store.getState()); // {post: 1, name: 'harsh', age: 24}
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREASE_BY, payload: 10 });
