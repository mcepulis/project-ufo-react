import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './components/mainPage/Main';
import { SecondFooter } from './components/secondPage/Footer/SecondFooter';
import { SecondHeader } from './components/secondPage/Header/SecondHeader';
import { SecondMain} from './components/secondPage/Main/SecondMain';
import style from './components/secondPage/css/Main.module.css';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project-ufo-react" element={<Main />} />
        <Route path="/project-ufo-react/second-page" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

function SecondPage() {
  return (
    <div className={style.second}>
      <SecondHeader />
      <SecondMain />
      <SecondFooter />
    </div>
  );
}

export default App;
