import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import JobCardMain from './components/JobCardMain';
// import WhyUs from "./components/WhyUs";
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
// import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Openings from './components/Openings';
import JobDesc from './components/JobDesc';
import Faq from './components/FAQ';
import './components/css/styles.css';
import WhyUs from './components/WhyUs';

import Recognition from './components/Recognition';
import ApplicationDetails from './components/admin/ApplicationDetails';
// import Dashboard from "./components/dashboard/Dashboard";
import ApplicationsTable from './components/admin/applicationtable';
import JobListing from './components/JobListing';

import FormComponent from './components/FormComponent';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div>
                <Carousel />
                <Stats />
                <Recognition />
                <JobCardMain />
                <WhyUs />
                <Testimonial />
              </div>
            }
          />

          {/* <Route
            exact
            path="/apply"
            element={<Form disabled={false} data={null} />}
          /> */}
          <Route exact path='/admin' element={<Login />} />
          <Route exact path='/openings' element={<Openings />} />
          <Route
            exact
            path='/admin/dashboard'
            element={<ApplicationsTable />}
          />
          <Route
            path='/dashboard/application/:id'
            element={<ApplicationDetails />}
          />
          <Route exact path='/opening' element={<JobDesc />} />
          <Route exact path='/faq' element={<Faq />} />
          <Route exact path='/admin/joblisting' element={<JobListing />} />
          <Route exact path='/apply' element={<FormComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
