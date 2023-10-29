import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';
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

import GlobalFonts from './styles/fonts';
import { GlobalStyle } from './styles/GlobalStyles';
import { lightTheme } from './styles/theme/theme';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <BrowserRouter>
      <GlobalFonts />
      <GlobalStyle theme={lightTheme} />
      <BottomNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/ItinerarySearch' element={<ItinerarySearch />} />
        <Route path='/memberSearch' element={<MemberSearch />} />
        <Route path='/member' element={<MemberDetail />} />
        <Route path='/itineraryInfo' element={<ItineraryInfo />} />
        <Route path='/userProfile' element={<UserProfile />} />
        <Route path='/tripSchedule' element={<TripSchedule />} />
        <Route path='/notifications' element={<Notificiation />} />
        <Route path='/Dibs' element={<Dibs />} />
        <Route path='/mapSearch' element={<MapSearch />} />
        <Route path='/management' element={<Management />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
