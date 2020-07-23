import React, {useState} from 'react';
import EditTask from '../containers/EditTask';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../App.scss'

export const Task = ({
  id, 
  text, 
  showEdit, 
  onDel, 
  allowEdit, 
  currentPosition,
  completed,
  completeTask
}) =>{

  return(
    <div 
      className="task-item"
      style={{
        opacity: completed ? '0.2' : null,
        border: completed ? 'none' : null,
      }}
    >
    <span className="task-number">({currentPosition+1}) </span> 
    <div className="header-actions">
      <input
        className="complete-check"
        type="checkbox"
        checked={completed}
        onChange={() => completeTask()}
      />
      <button 
        className="del"
        title="delete"
        onClick={()=> onDel()}
      >
        X
      </button>
    </div>
    <h1 
      className="title"
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </h1>
    <div 
      className="button-group"
      style={{visibility: completed ? 'hidden' : null}}
    >
      {
        showEdit
          ? <EditTask id={id} setEditing={allowEdit} /> 
          :  (
            <button 
              className="btn-action"
              title="edit"  
              onClick={allowEdit}
            >
              Edit
            </button>
          )
      }
    </div>
  </div>
  );
}
Task.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  highlight: PropTypes.bool,
  showEdit: PropTypes.bool,
  onClick: PropTypes.func,
  onDel: PropTypes.func,
  allowEdit: PropTypes.func,
  currentPosition: PropTypes.number,
};

export default (Task);