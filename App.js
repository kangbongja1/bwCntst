import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/*import ToExamine from './pages/ToExamine';
import Home from './pages/';
import Home from './pages/';
import Home from './pages/';
import Home from './pages/';
import About from './pages/About';
import Contact from './pages/Contact';*/
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/MyProgram" component={MyProgram} />
        
        <Route path="/exStd" component={exStd} />
        <Route path="/club" component={club} />
        <Route path="/MyPage" component={MyPage} />

        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}
export default App;
