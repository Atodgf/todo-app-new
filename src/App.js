import React from 'react'
import TodoDisplay from './Todo/TodoDisplay'
import TodoFirstname from './Todo/TodoFirstname'
import TodoLastname from './Todo/TodoLastname'
import TodoEmail from './Todo/TodoEmail'
import TodoType from './Todo/TodoType'
import TodoReport from './Todo/TodoReport'
import TodoComment from './Todo/TodoComment'


function App() {
  const todos = [
    {id: 1,  title: "Buy stuff"},
    {id: 2,  title: "Buy more stuff"}
  ]
  return <div className="todo">
      <TodoDisplay todos={todos}/>
      <TodoFirstname/>
      <TodoLastname/>
      <TodoEmail/>
      <div>from <div></div></div>
      <div>to<div></div></div>
      <TodoType/>
      <TodoReport/>
      <TodoComment/>
  </div>
}

export default App;
