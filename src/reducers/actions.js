const actionsReducer = (state, action) => {

  switch(action.type) {
    case 'POPULATE_ACTIONS':
      return action.actions; 
    case 'ADD_ACTION':
      return [...state, action.action];
    case 'REMOVE_ACTION':
      return state.filter((item, index) => index !== action.actionIndex);
    case 'REMOVE_ALL':
      return [];
    default:
      return state;  
  }
}

export default actionsReducer;