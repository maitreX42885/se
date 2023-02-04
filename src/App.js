import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';
import DashBoard from './components/dashboard/DashBoard';
import { AuthProvider } from './components/Auth';
import { PageCursorProvider } from './components/dashboard/ValDashboard';
import { ValPopupProvider } from './components/PopupForm/ValPopup';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PageCursorProvider>
          <ValPopupProvider>
            <Routes>
              <Route path='/' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/dashboard' element={<DashBoard />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </ValPopupProvider>
        </PageCursorProvider>
      </AuthProvider>
      
    </div>
  );
}

export default App;
