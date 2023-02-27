import './App.css';
import MainPage from './pages/MainPage'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { RecoilRoot } from 'recoil';
import Header from './components/common/Header';
import RegisterPage from './pages/RegisterPage';
import SettingPage from './pages/SettingPage';
import MyPostsPage from './pages/MyPostsPage';
import CoursePage from './pages/CoursePage';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/register' exact element={<RegisterPage />} />
            <Route path='/myPosts' exact element={<MyPostsPage />} />
            <Route path='/setting' exact element={<SettingPage />} />
            <Route path='/course' exact element={<CoursePage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
