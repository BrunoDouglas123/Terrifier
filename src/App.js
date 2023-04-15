import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Deserto from "./pages/Deserto/Deserto";
import Floresta from "./pages/Floresta/Floresta";
import Pantano from "./pages/Pantano/Pantano";
import Cidade from "./pages/Cidade/Cidade";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/florestas" component={Floresta} />
        <Route path="/desertos" component={Deserto} />
        <Route path="/pantanos" component={Pantano} />
        <Route path="/cidades" component={Cidade} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
