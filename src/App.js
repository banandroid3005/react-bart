import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CnInfo from "./components/CnInfo";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy-loaded pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Services = React.lazy(() => import("./components/pages/Services"));
const Car = React.lazy(() => import("./components/pages/Car"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const AboutMe = React.lazy(() => import("./components/pages/AboutMe"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <CnInfo />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/Usługi"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/Auto"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Car />
            </Suspense>
          }
        />
        <Route
          path="/Kontakt"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/O-mnie"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <AboutMe />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
