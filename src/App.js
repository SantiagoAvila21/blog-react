import React from 'react';
import {Topbar} from './Components/Topbar/Topbar.jsx'
import { Single } from './pages/Single/Single.jsx'
import { WritePost } from './pages/WritePost/WritePost.jsx'
import { Settings } from './pages/Settings/Settings.jsx'
import { Login } from './pages/Login/Login.jsx'
import {Register} from './pages/Register/Register.jsx'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/home/Home.jsx'

function App() {
  let user = false;
  return (
    <React.Fragment>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/register" element={(user) ? <Home /> : <Register />} />
          <Route path="/login" element={(user) ? <Home /> : <Login />} />
          <Route path="/settings" element={(user) ? <Settings /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/write" element={(user) ? <WritePost /> : <Register />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
