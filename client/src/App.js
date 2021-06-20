import React, { useState, useEffect } from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import useStyles from './styles';
import Navbar from './components/Form/Navbar/navbar';
import Footer from './components/Form/Footer/footer';
import Home from "./components/Pages/Home/home";
import About from "./components/Pages/About/about";
import Contact from "./components/Pages/Contact/contact";
import { useDispatch } from 'react-redux';
import Signup from './components/Pages/Signup/signup';
//import { getPosts } from './actions/posts';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
 
 /* useEffect(() => {
    dispatch(getPosts());
  }, [currentId,dispatch]);
*/
  return (
   
    <div className="App">
     <Router>
     <Navbar />
     <Switch>
       <Route path="/" component={Home} exact>
         <Home />
       </Route>
       <Route path="/about" component={About} exact>
         <About />
       </Route>
       <Route path="/contact" component={Contact} exact>
         <Contact />
       </Route>
       <Route path="/signup" component={Signup} exact>
         <Signup />
       </Route>
     </Switch>
     </Router>

     <Footer />
      <Grow in>
      <Container>
        <Grid classeName={classes.maincontainer} container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
          </Grid>
          <Grid item xs={12} sm={4}>
          </Grid>
        </Grid>
      </Container>
    </Grow>
    </div>
      
  )
}

export default App;
