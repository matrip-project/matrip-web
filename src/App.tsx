import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import BottomNav from './components/BottomNav';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme/theme';

import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import ProfileViewer from './pages/ProfileViewer';
import ResetPassword from './pages/ResetPassword';
import MapSearch from './pages/MapSearch';
import MyPageMain from './pages/MyPageMain';
import NotFound from './pages/NotFound';
import Management from './pages/Management';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TabMenu from './components/@atoms/TabMenu';
import NoticeBoard from './pages/NoticeBoard';
import FAQ from './pages/FAQ';
import CompanionList from './pages/CompanionList';
import MyInterestedCompanionLog from './pages/MyInterestedCompanionLog';
import MyPostWrote from './pages/MyPostWrote';
import Detail from './pages/Detail';
import Comments from './pages/Comments';
import PopularTravel from './pages/PopularTravel';
import TopNav from './components/TopNav';
import Posting from './pages/Posting';
import ScrollToTop from './utils/scrollToTop';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  const serviceTabs = [
    { label: '공지사항', to: '/service/notice' },
    { label: '고객센터', to: '/service/faq' },
    { label: '이용 약관', to: '/service/terms' },
    { label: '개인정보처리방침', to: '/service/privacy' }
  ];

  const companions = [
    { label: '관심 동행 목록', to: '/companionLog/myInterest' },
    { label: '내가 쓴 글', to: '/companionLog/myPost' }
  ];

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyle />
        <BottomNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/mypage' element={<MyPageMain />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/editProfile' element={<EditProfile />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/profileView/:id' element={<ProfileViewer />} />
          <Route path='/trip/:id' element={<Detail />} />
          <Route path='/trip/:id/comments' element={<Comments />} />
          <Route path='/posting' element={<Posting />} />
          <Route path='/userProfile' element={<UserProfile />} />
          <Route path='/mapSearch' element={<MapSearch />} />
          <Route path='/companionList' element={<CompanionList />} />
          <Route path='/management' element={<Management />} />
          <Route path='/popularTravel' element={<PopularTravel />} />
          <Route path='/companionLog' element={<TabMenu tabs={companions} />}>
            <Route
              path='/companionLog/myInterest'
              element={<MyInterestedCompanionLog />}
            />
            <Route path='/companionLog/myPost' element={<MyPostWrote />} />
          </Route>

          <Route path='/service/' element={<TabMenu tabs={serviceTabs} />}>
            <Route path='notice' element={<NoticeBoard />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='terms' element={<Terms />} />
            <Route path='privacy' element={<Privacy />} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
