
import './App.css';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import HomeStudent from './component/Home/HomeStudent';
import NavBar from './component/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllIncludes from './component/AllIncludes/AllIncludes';
import StudentRegister from './component/Home/StudentRegister';
import TeacherRegister from './component/Home/TeacherRegister';
import TeacherDashboard from './component/TeacherDashboard/TeacherDashboard';
import StudentDashboard from './component/StudentDashboard/StudentDashboard';
import Marks from './component/Marks/Marks';

function App() {
  return (
    <div className="App">



      <Routes>
        <Route path="/" element={<AllIncludes />}/>

          <Route path="/student-login" element={<HomeStudent />} />
          <Route path="/teacher-login" element={<Home />} />
          <Route path="/student-registration" element={<StudentRegister />} />
          <Route path="/teacher-registration" element={<TeacherRegister />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student-dashboard/marks" element={<Marks />} />
          
          

       


      </Routes>




    </div>
  );
}

export default App;
