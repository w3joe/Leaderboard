import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LeaderboardPage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProfilePage from './pages/ProfilePage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LeaderboardPage/>}/>
      <Route path='/profile' element={<ProfilePage/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
