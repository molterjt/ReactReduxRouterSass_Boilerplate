import {
    ADD_TASK,
    REMOVE_TASK,
    EDIT_TASK,
    HIGHLIGHT_TASK,
    ALLOW_EDIT,
    COMPLETE_TASK
} from '../actions';
import {combineReducers} from 'redux';


const initialState= [
    {id: '001', text: 'Review Code'},
    {id: '002', text: 'Create New Project Directory'},
    {id: '003', text: 'Exec Script'},
    {id: '004', text: 'Check Dev Dependencies'},
    {id: '005', text: 'npm i'},
    {id: '006', text: 'Get to Work'}
]

export const allTasks = (state=Object.values(initialState), action) => {
  switch(action.type){
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          highlight: false,
          showEdit: false,
        }
      ];
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.id);
    case EDIT_TASK:
      return state.map(task =>
        task.id === action.id
          ? Object.assign({}, task, {text:action.text, highlight: false, showEdit: false })
          : task
      );
    case COMPLETE_TASK:
      return state.map(task =>
        task.id === action.id
          ? Object.assign({}, task, { completed: !task.completed })
          : task
      );
    case HIGHLIGHT_TASK:
      return state.map(task =>
        task.id === action.id
          ? Object.assign({}, task, { highlight: !task.highlight })
          : task
      );
    case ALLOW_EDIT:
      return state.map(task =>
        task.id === action.id
          ? Object.assign({}, task, { showEdit: !task.showEdit })
          : task
      );    
    default:
      return state;
  }
}


export default combineReducers({
  allTasks
});