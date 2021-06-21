import React , { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => { 
  const [courseGoals, setCourseGoals] = useState([    //this is the initial state
    {id: 'cg1', text:'Finish the course'},  //courseGoals holds the current state and setCourseGoals hods a function which can be used to update the state
    {id: 'cg2', text:'Learn all  about the course Main topic'},
    {id: 'cg3', text:'Help our students in the course Q&A'}
  ]);

  const addNewGoalHandler = newGoal => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) =>
    prevCourseGoals.concat(newGoal));
  };
  return (<div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals} />
  </div>
  );
};
export default App;
