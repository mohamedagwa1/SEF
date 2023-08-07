import { Routes, Route, HashRouter, RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Student_Portal from './Pages/Student_Portal/Student_Portal';
import Instructor_Portal from './Pages/Instructor_Portal/Instructor_Portal'
import "@fortawesome/fontawesome-free/css/all.css";
import Articalpage from "./Pages/Adminpanel/Articalpage/Articalpage";
import Jopspage from "./Pages/Adminpanel/Jopspage/Jopspage";
import Userspage from "./Pages/Adminpanel/Userspage/Userspage";
import Coursespage from "./Pages/Adminpanel/Coursespage/Coursespage";
import MainLayout from "./Layouts/MainLayout";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CreateAndUpdatecourses from "./Components/CreateAndUpdatecourses/CreateAndUpdatecourses";
import JobShowPage from './Components/JobShowPage/JobShowPage';
import MainInformation1Form from './Components/MainCreateCV/MainInformation1Form';

import React, { useState } from 'react';
import CerateUpdateUser from './Pages/CreateUpdateUser/CerateUpdateUser';
import UplaodCertifiacte from './Pages/UplaodCertifiacte/UploadCertificate';
import UserProfilePage from './Pages/UserProfilePage/UserProfilePage';
import jobspanel from './Pages/Adminpanel/Jopspage/Jopspage'
import Home from './Pages/HomePage/Home';
import BussinessPage from './Pages/BusinnessPage/Business';
import Signup from './Pages/SignupPage/Signup';
import Login from './Pages/LoginPage/Login';
import NewsPage from './Pages/ShowNewsPage/NewsPage';
import Exams from './Pages/ExamsPage/Exams';
import AdminPanel from './Pages/AdminPanelPage/AdminPanel';
import Contact from './Pages/ContactPage/Contact';
import CreateNewsArticlePage from './Pages/CreateNewsArticlePage/CreateNewsArticlePage';
import Courses from "./Pages/Courses/Courses";
import ExsamResults from './Components/ExsamResults/ExsamResults';
import JobsPagenotpanel from './Pages/Jobs/Jobs';
import JobShow from './Pages/JobShow/Jobshow';
import Jobspage from './Pages/Adminpanel/Jopspage/Jopspage';
import ForgetPassword from './Components/SignupLoginForm/ForgetPassword';
import Page from './Pages/OnlineExam/Page'
import CreateExamPage from './Pages/CreateExamPage/CreateExamPage';
import CreateAndUpdatejobs from './Components/CreateAndUpdatejobs/CreateAndUpdatejobs'
import Edit from './Pages/ProfileEdit/Edit';
import CourseShowPageEnrolled from './Pages/CourseShowPageEnrolled/CourseShowPageEnrolled';
import CourseShowPageNotEnrolled from './Pages/CourseShowPageNotEnrolled/CourseShowPageNotEnrolled';
import JobApp from './Pages/JobApplication/Jobapplication'
import StudentUsers from './Pages/Adminpanel/StudentUsersPage/StudentUserspage'
import HeaderTopLogIn from './Components/Home/HeaderTopLogIn';
import HeaderHome from './Components/Home/Header';
import NewCreateCVPage from './Pages/CreateCV/MainCreateCV';
import Summary2Form from './Components/MainCreateCV/Summary2Form';
import Skills3Form from './Components/MainCreateCV/Skills3Form';
import HonersAndAwards6Form from './Components/MainCreateCV/HonersAndAwards6Form';
import HobbiesAndInterests7Form from './Components/MainCreateCV/HobbiesAndInterests7Form';
import Experience4Form from './Components/MainCreateCV/Experience4Form';
import Education5Form from './Components/MainCreateCV/Education5Form';
import Links8Form from './Components/MainCreateCV/Links8Form';

function App() {
  const [flag, setFlag] = useState(false);
  const HeaderDisplay = (window.location.pathname === '/signup' || window.location.pathname === '/login' || window.location.pathname === '/forgetpassword') ? null : <Header flag={flag} />
  const FooterDisplay = (window.location.pathname === '/signup' || window.location.pathname === '/login' || window.location.pathname === '/forgetpassword') ? null : <Footer />

  return (
    <>
      {HeaderDisplay}
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/business' element={<BussinessPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/businessDetails/:id' element={<NewsPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/adminPanel' element={<AdminPanel />} />
        <Route path='/coursePage' element={<Courses />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
       
        <Route path='/jobApp' element={<JobApp />} />

        <Route path='/CreateAndUpdatejobs' element={<CreateAndUpdatejobs />} />
        <Route path='/CreateAndUpdatecourses' element={<CreateAndUpdatecourses />} />
        <Route path='/CreateNewsArticlePage' element={<CreateNewsArticlePage />} />
        <Route path='/CerateUpdateUser' element={<CerateUpdateUser />} />
        <Route path='/EditProfile' element={<Edit />} />
        <Route path='/examsResult' element={<ExsamResults />} />
        <Route path='/instructorPortal' element={<Instructor_Portal />} />
        <Route path='/jobApp' element={<JobShowPage />} />
        <Route path='/jobs' element={<Jobspage />} />
        <Route path='/jobsShow' element={<JobShow />} />
        <Route path='/studentPortal' element={<Student_Portal />} />
        <Route path='/UplaodCertifiacte' element={<UplaodCertifiacte />} />
        <Route path='/userProfilePage' element={<UserProfilePage />} />
        {/* ========================================= */}


        <Route path='/studentusers' element={<StudentUsers />} />
        <Route path='/userPage' element={<Userspage />} />
        <Route path='/articles' element={<Articalpage />} />
        <Route path='/jobsPage2' element={<Jobspage />} />
        <Route path='/courses' element={<Coursespage />} />
        <Route path='/onlineexam' element={<Page />} />
        <Route path='/createexampage' element={<CreateExamPage />} />
        <Route path='/CourseShowPageEnrolled' element={<CourseShowPageEnrolled />} />
        <Route path='/CourseShowPagenotEnrolled' element={<CourseShowPageNotEnrolled />} />
        <Route path='/jobsPagenotpanel' element={<JobsPagenotpanel />} />

        {/* New Create CV */}
        <Route
          path="/createcv"
          element={
            <>
              <NewCreateCVPage />
            </>
          }
        >
          {/* redirect to first route -------------------------------- */}
          <Route
            index
            element={<Navigate replace to="/createcv/main-information" />}
          />
          <Route path="main-information" element={<MainInformation1Form />} />
          <Route path="summary" element={<Summary2Form />} />
          <Route path="skills" element={<Skills3Form />} />
          <Route
            path="honers-and-awards"
            element={<HonersAndAwards6Form />}
          />
          <Route
            path="hobbies-and-interests"
            element={<HobbiesAndInterests7Form />}
          />
          <Route path="experience" element={<Experience4Form />} />
          <Route path="education" element={<Education5Form />} />
          <Route path="links" element={<Links8Form />} />
        </Route>
      </Routes>
      {FooterDisplay}

    </>
  );
}

export default App;
