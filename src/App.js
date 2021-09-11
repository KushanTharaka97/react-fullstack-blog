import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
} from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomePage} exact />
      </Router>
    </div>
  );
}

export default App;
