import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './routes/Login';
import Main from './routes/Main'
import TV from './routes/TV'
import Movies from './routes/Movies'
import SignUpPage from './routes/SignUpPage';
import Videos from './routes/Videos';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App imgSrc="/home/skynet/Documents/React/fakeflix/src/notflix.png"/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/browse" element={<Main/>}>
          <Route path="/browse/tv-shows" element={<TV/>}/>
          <Route path="/browse/movies" element={<Movies/>}/>
          
        </Route>
        <Route path="/video" element={<Videos/>}/>
      </Routes>
      <Outlet/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
