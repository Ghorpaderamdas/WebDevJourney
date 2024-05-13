import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import LazyLoadedComponent from './LazyLoadedComponent'; 
import 'react-toastify/dist/ReactToastify.css';

// Import of custom components
import Navbar from './static/js/components/common/Navbar';
import Error from './static/js/pages/Error';
import Home from './static/js/pages/Home';
import About from './static/js/pages/About';
import Contact from './static/js/pages/Contact';
import Catalog from './static/js/pages/Catalog';
import CourseDetails from './static/js/pages/CourseDetails';
import Searchpage from './static/js/pages/Searchpage';
import InstructorProfile from './static/js/pages/InstructorProfile';
import Dashboard from './static/js/pages/Dashboard';
import MyProfile from './static/js/components/core/Dashboard/MyProfile';
import Setting from './static/js/components/core/Dashboard/Settings';
import EnrolledCourses from './static/js/components/core/Dashboard/Student/EnrolledCourses';
import Cart from './static/js/components/core/Dashboard/Student/Cart';
import BookmarkedCourses from './static/js/components/core/Dashboard/Student/Wishlist';
import MyCourses from './static/js/components/core/Dashboard/Instructor/MyCourse/MyCourses';
import AddCourse from './static/js/components/core/Dashboard/Instructor/AddCourse';
import EditCourse from './static/js/components/core/Dashboard/Instructor/EditCourse';
import AddCategory from './static/js/components/core/Dashboard/Admin/AddCategory';
import AllCourses from './static/js/components/core/Dashboard/Admin/AllCourses';
import AllUsers from './static/js/components/core/Dashboard/Admin/AllUsers';
import Instructor from './static/js/components/core/Dashboard/Instructor/Dashboard/Instructor';
import VerifyEmail from './static/js/pages/VerifyEmail';
import ForgotPassword from './static/js/pages/ForgotPassword';
import UpdatePassword from './static/js/pages/UpdatePassword';
import Login from './static/js/pages/Login';
import Signup from './static/js/pages/Signup';
import ViewCourse from './static/js/pages/ViewCourse';
import VideoDetails from './static/js/components/core/ViewCourse/VideoDetails';
import ReportBtn from './static/js/components/common/ReportBtn';
import { getUserDetails } from './static/js/services/operations/profileAPI';
import { ACCOUNT_TYPE } from './static/js/utils/constants';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = JSON.parse(localStorage.getItem('token'));
      dispatch(getUserDetails(token, navigate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="search/:query" element={<Searchpage />} />
        <Route path="instructor/:instructorId" element={<InstructorProfile />} />

        <Route element={<Dashboard />}>
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Setting />} />

          {(user?.accountType === ACCOUNT_TYPE.STUDENT || ACCOUNT_TYPE.ADMIN) && (
            <>
              <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
              <Route path="dashboard/cart" element={<Cart />} />
              <Route path="dashboard/bookmarked-courses" element={<BookmarkedCourses />} />
            </>
          )}

          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
            </>
          )}

          {user?.accountType === ACCOUNT_TYPE.ADMIN && (
            <>
              <Route path="dashboard/add-category" element={<AddCategory />} />
              <Route path="dashboard/all-courses" element={<AllCourses />} />
              <Route path="dashboard/all-users" element={<AllUsers />} />
            </>
          )}
        </Route>

        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="update-password/:id" element={<UpdatePassword />} />
        <Route path="verify-email" element={<VerifyEmail />} />

        <Route element={<ViewCourse />}>
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId" element={<VideoDetails />} />
          )}
        </Route>
      </Routes>
      <div className="fixed bottom-8 md:right-10 right-4">
        <ReportBtn />
      </div>
    </div>
  );
};

export default App;
