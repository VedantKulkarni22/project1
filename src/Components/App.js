import LandingPage from './LandingPage';
import SignUpandLogin from './SignUpandLogin';
import Profile from './Profile';
import TestContainer from './TestContainer';
import AnxietyTest from './AnxietyTest';
import AnxietyResult from './AnxietyResult';
import DepressionTest from './DepressionTest';
import DepressionResult from './DepressionResult';
import DASSTest from './DASSTest';
import '../Styles/App.css';
import ComingSoon from './ComingSoon';
import Quiz from './Quiz';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App d-flex align-items-center justify-content-center">
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/landingpage" element={<LandingPage/>}></Route>
        </Routes>
      </div>
      <Routes>
          <Route path="/signuplogin" element={<SignUpandLogin/>}></Route>
          <Route path="/anxietytest" element={<AnxietyTest/>}></Route>
          <Route path="/anxietyresult/:score" element={<AnxietyResult/>}></Route>
          <Route path="/depressiontest" element={<DepressionTest/>}></Route>
          <Route path="/depressionresult/:score" element={<DepressionResult/>}></Route>
          <Route path="/dasstest" element={<DASSTest/>}></Route>
          <Route path="/home" element={<TestContainer/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/quiz" element={<Quiz/>}></Route>
          <Route path="/comingsoon" element={<ComingSoon/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;
