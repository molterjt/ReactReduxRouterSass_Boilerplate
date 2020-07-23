import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import '../App.scss';

export const TaskList = ({
    tasks, completeTask, onDeleteTask, onAllowEdit
}) => (
    <div className="task-list">
      {tasks ? 
        tasks.map((task,index) => (
          <Task
            id={task.id}
            key={index}
            currentPosition={index}
            text={task.text}
            highlight={task.highlight}
            completed={task.completed}
            showEdit={task.showEdit}
            onDel={() => onDeleteTask(task.id)}
            allowEdit={() => onAllowEdit(task.id)}
            completeTask={() => completeTask(task.id)}
          /> 
    ))
    : <p>No Tasks ???</p>   
    }
  </div>
);
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      highlight: PropTypes.bool,
      showEdit: PropTypes.bool,
      text: PropTypes.string,
      timerOn: PropTypes.bool,
      minutes: PropTypes.number,
      hours: PropTypes.number,
      showSetTimerModal: PropTypes.bool,
    })
  ),
  onTaskComplete: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onAllowEdit: PropTypes.func,
  onDropTask: PropTypes.func,
  onShuffleTasks: PropTypes.func,
  setTheTimer: PropTypes.func,
  countDown: PropTypes.func,
  onToggleSetTimerModal: PropTypes.func,
  onToggleTimerSwitch: PropTypes.func,
};