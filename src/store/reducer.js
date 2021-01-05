let initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        persons: state.persons.concat({
          id: Math.random(),
          name: 'Max',
          age: Math.floor(Math.random() * 480),
        }),
      };
    default:
      return state;
  }
};

export default reducer;