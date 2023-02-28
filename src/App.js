import React, { useState } from "react";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import JobCardMain from "./components/JobCardMain";
// import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
// import Form from "./components/Form";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Openings from "./components/Openings";
import JobDesc from "./components/JobDesc";
import Faq from "./components/FAQ";
import "./components/css/styles.css";
import WhyUs from "./components/WhyUs";

import Recognition from "./components/Recognition";
import ApplicationDetails from "./components/admin/ApplicationDetails";
// import Dashboard from "./components/dashboard/Dashboard";
import ApplicationsTable from "./components/admin/applicationtable";
import JobListing from "./components/JobListing";
import Events from "./components/Events.js";
import FormComponent from "./components/FormComponent";
import FormUpload from "./components/FormUpload";
import Submitted from "./components/Submitted";
import AuthContext from "./store/auth-context";
import Logout from "./Logout";
import SideBarAdmin from "./components/SideBarAdmin";
import Contact from "./components/Contact";

function App() {
  const [id, setId] = useState();
  const authCtx = React.useContext(AuthContext);
  return (
    <BrowserRouter>
      <div>
  
        {authCtx.isLoggedIn ? (
          <>
            <Navbar />
            <SideBarAdmin />
          </>
        ) : (
          <>
            <Navbar />
          </>
        )}

        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Carousel />
                <Stats />
                <Recognition />
                <JobCardMain />
                <WhyUs />
                <Events />
                {/* <Testimonial /> */}
              </div>
            }
          />

          {/* <Route
            exact
            path="/apply"
            element={<Form disabled={false} data={null} />}
          /> */}
          <Route exact path="/admin" element={<Login />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/logout"
            element={
              authCtx.isLoggedIn ? <Logout /> : <Navigate to="/" replace />
            }
          />
          <Route exact path="/openings" element={<Openings />} />

          <Route
            exact
            path="/logout"
            element={
              authCtx.isLoggedIn ? <Logout /> : <Navigate to="/admin" replace />
            }
          />
          <Route exact path="/openings" element={<Openings />} />
          <Route
            exact
            path="/admin/dashboard"
            element={
              authCtx.isLoggedIn ? (
                <>
                  <ApplicationsTable />
                </>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/dashboard/application/:id"
            element={
              authCtx.isLoggedIn ? (
                <>
                  <ApplicationDetails />
                </>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route exact path="/opening" element={<JobDesc />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/admin/joblisting" element={<JobListing />} />
          <Route
            exact
            path="/apply"
            element={<FormComponent id={id} setId={setId} />}
          />
          <Route
            exact
            path="/apply/upload/:id"
            element={<FormUpload id={id} setId={setId} />}
          />
          <Route
            exact
            path="/apply/upload/:id/submitted"
            element={<Submitted />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
