import {
  visibilityFilter,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from "./actions";

const initialState = {
  visibilityFilter: visibilityFilter.SHOW_ALL,
  todos: []
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      };
    case ADD_TODO:
      return {
      
      }
      }
    default:
      return state;
  }
};
