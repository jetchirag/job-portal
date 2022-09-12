import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import JobCardMain from "./components/JobCardMain";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Carousel />
                <Stats />
                <JobCardMain />
                <WhyUs />
                <Testimonial />
              </div>
            }
          />
          <Route exact path="/apply" element={<Form />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
