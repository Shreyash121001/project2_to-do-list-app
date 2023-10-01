import React from 'react'
import Login from './components/Login'
import TaskList from './components/TaskList'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route,
  Link,
  // useNavigate
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/TaskList' element={<TaskList/>} />
      {/* <Route path='*' element={<Errror />} /> */}
    </Routes>
    </Router>
    </div>
  )
}

export default App
