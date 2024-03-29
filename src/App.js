import React from 'react';
import GlobalStyle from './globalStyles';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/Signup';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
    </Router>
   

  );
}

export default App;
