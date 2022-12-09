import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import {Navigate, Routes, Route,useNavigate} from 'react-router-dom';
import Edit_student from './Edit_student';
import { AddStudent } from './AddStudent';
import Trial from './AddTeacher';
import { DisplayTeachers } from './DisplayTeachers';
import { DisplayStudent } from './DisplayStudent';
import Edit_Teachers from './Edit_Teachers';
import Welcome from './Welcome';
import AddTeacher from './AddTeacher';

function App() {
  return (
    <div className="App">
      
        <h1>this is student-teacher app</h1>
     <Dashboard/>


<Routes>
<Route path="/" element={<Welcome/>} />
<Route path="/student/edit/:id" element={<Edit_student/>} />
<Route path="/student/add" element={<AddStudent/>} />
<Route path="/student/display" element={<DisplayStudent/>} />
<Route path="/teacher/add" element={<AddTeacher/>} />
<Route path="/teacher/display" element={<DisplayTeachers/>} />
<Route path="/teacher/edit/:id" element={<Edit_Teachers/>} />
</Routes>


    </div>
  );

}

export default App;
