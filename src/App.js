import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ArticlePage from './pages/ArticlePage';
import ArticleList from './pages/ArticlesList';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
    <div className="App">
     
      <div id="page-body">
     
      <NavBar />
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About}  />
        <Route path="/article-list" component={ArticleList} />
        <Route path="/article/:name" component={ArticlePage} />



      </div>
    </div>
    </Router> 
  );
}

export default App;
