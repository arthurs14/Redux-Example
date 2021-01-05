import * as actionTypes from './actions';

let initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(),
          name: 'Max',
          age: Math.floor(Math.random() * 480),
        }),
      };
    case actionTypes.DELETE:
      let updatedArr = state.persons.filter(person => person.id !== action.id);
      return {
        ...state,
        persons: updatedArr,
      };
    default:
      return state;
  }
};

export default reducer;