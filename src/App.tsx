import React from 'react';
import RegistrationPage from './pages/Registration';
import { Routes, Route } from 'react-router-dom';
import './assets/styles/index.scss';
import ROUTEPATH from './const/routesPath';
import Layout from './utils/Layout';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

function App() {
  return (
    <div>
      <Layout />
        <Routes>
            <Route path={ROUTEPATH.HOME} element={<HomePage />} />
            <Route path={ROUTEPATH.REGISTRATION} element={<RegistrationPage />} />
            <Route path={ROUTEPATH.LOGIN} element={<LoginPage />} />
        </Routes>
    </div>
  );
}

export default App;
