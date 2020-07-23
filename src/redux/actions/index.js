export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const HIGHLIGHT_TASK = "HIGHLIGHT_TASK";
export const ALLOW_EDIT = "ALLOW_EDIT";

let taskId = 0;

export const addTask = (text) => ({
  type: ADD_TASK,
  id: taskId++,
  completed: false,
  text,
  hours:0,
  minutes:0,
  seconds:0,
  totalTime:'',
  displayTime: "0:00:00",
  timerOn: false,
});

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    id
  }
}

export function editTask(id, text) {
  return {
    type: EDIT_TASK,
    id,
    text
  }
}

export const highlightTask = (id) => ({
  type: HIGHLIGHT_TASK,
  id
});

export const completeTask = (id) => ({
  type: COMPLETE_TASK,
  id,
});

export const allowEdit = (id) => ({
  type: ALLOW_EDIT,
  id
});




