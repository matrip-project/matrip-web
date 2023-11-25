import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalFonts from './styles/fonts';
import { GlobalStyle } from './styles/GlobalStyles';
import BottomNav from './components/BottomNav';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme/theme';

import Home from './pages/Home';
import MemberSearch from './pages/MemberSearch';
import ItineraryInfo from './pages/ItineraryInfo';
import UserProfile from './pages/UserProfile';
import MapSearch from './pages/MapSearch';
import TripSchedule from './pages/TripSchedule';
import Notificiation from './pages/Notification';
import Dibs from './pages/Dibs';
import NotFound from './pages/NotFound';
import Management from './pages/Management';
import Login from './pages/Login';
import MemberDetail from './pages/MemberDetail';
import ItinerarySearch from './pages/ItinerarySearch';
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

function App() {
  const serviceTabs = [
    { label: '공지사항', to: '/service/notice' },
    { label: '고객센터', to: '/service/faq' }
  ];

  const companions = [
    { label: '관심 동행 목록', to: '/companionLog/myInterestedCompanionLog' },
    { label: '내가 쓴 글', to: '/companionLog/myPostWrote' }
  ];

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalFonts />
        <GlobalStyle />
        <BottomNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/ItinerarySearch' element={<ItinerarySearch />} />
          <Route path='/trip/:id' element={<Detail />} />
          <Route path='/trip/:id/comments' element={<Comments />} />
          <Route path='/memberSearch' element={<MemberSearch />} />
          <Route path='/member' element={<MemberDetail />} />
          <Route path='/itineraryInfo' element={<ItineraryInfo />} />
          <Route path='/userProfile' element={<UserProfile />} />
          <Route path='/tripSchedule' element={<TripSchedule />} />
          <Route path='/notifications' element={<Notificiation />} />
          <Route path='/Dibs' element={<Dibs />} />
          <Route path='/mapSearch' element={<MapSearch />} />
          <Route path='/companionList' element={<CompanionList />} />
          <Route path='/management' element={<Management />} />
          <Route path='/popularTravel' element={<PopularTravel />} />
          <Route path='/companionLog/' element={<TabMenu tabs={companions} />}>
            <Route
              path='myInterestedCompanionLog'
              element={<MyInterestedCompanionLog />}
            />
            <Route path='myPostWrote' element={<MyPostWrote />} />
          </Route>
          <Route path='/service/' element={<TabMenu tabs={serviceTabs} />}>
            <Route path='notice' element={<NoticeBoard />} />
            <Route path='faq' element={<FAQ />} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Routes> 
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
