import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Router } from "@reach/router";
import Fixtures from "./pages/Fixtures";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Resources from "./pages/Resources";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <div className="container">
          <Router>
            <Home path="/" />
            <Fixtures path="/fixtures" />
            <News path="/news" />
            <Gallery path="/gallery" />
            <Resources path="/resources" />
            <Contact path="/contact" />
          </Router>
        </div>
      </Layout>
    </div>
  );
};

export default App;
