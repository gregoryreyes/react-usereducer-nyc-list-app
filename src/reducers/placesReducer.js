export function placesReducer(state, action) {
  switch (action.type) {
    case "ADD_LOCATION": {
      return [
        {
          id: new Date().getTime(),
          title: action.payload.title,
          completed: false,
        },
        ...state,
      ];
    }
    case "TOGGLE_COMPLETED": {
      return state.map((location) => {
        if (location.id === action.payload.id) {
          return { ...location, completed: !location.completed };
        }
        return location;
      });
    }
    case "DELETE_LOCATION": {
      return state.filter((location) => location.id !== action.payload.id);
    }

    case "EDIT_LOCATION": {
      return state.map((location) => {
        if (location.id === action.payload.id) {
          return { ...location, title: action.payload.title };
        }
        return location;
      });
    }
    default:
      return state;
  }
}