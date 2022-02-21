//import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {LandingPage} from './components/landingpage';
import {SearchResult} from './components/searchresult';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/search/:id" element={<SearchResult></SearchResult>}></Route>
      </Routes>
      <div className="home__inputContainer">
        <SearchResult/>
      </div>
    </div>
  );
}

export default App;
