import React from 'react';
import AddTask from './containers/AddTask';
import MappedTaskList from './containers/MappedTaskList'
import './App.scss';


export const App = () => {
  return(
    <div className="app-container">
      <div className="header-info" >
        <h2>Sample Task Project</h2>
        <h5>React, Redux, React-Router, & Webpack-Babel BoilerPlate</h5>
        <p>Run script to create new project directory as destination</p>
        <code>" cp -a /sourceDir/. destinationDir/ "</code>
      </div>
      <AddTask/>
      <MappedTaskList/>
    </div>
  )
}

   
      
    
  

