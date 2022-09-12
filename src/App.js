import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_APIKEY;
  const country = "in";

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={
            <News setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general" apiKey={apiKey} />
          } />
          <Route exact path="/business" element={
            <News setProgress={setProgress} key="business" pageSize={pageSize} country={country} category="business" apiKey={apiKey} />
          } />
          <Route exact path="/entertainment" element={
            <News setProgress={setProgress} key="entertainment" pageSize={pageSize} country={country} category="entertainment" apiKey={apiKey} />
          } />
          <Route exact path="/general" element={
            <News setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general" apiKey={apiKey} />
          } />
          <Route exact path="/health" element={
            <News setProgress={setProgress} key="health" pageSize={pageSize} country={country} category="health" apiKey={apiKey} />
          } />
          <Route exact path="/science" element={
            <News setProgress={setProgress} key="science" pageSize={pageSize} country={country} category="science" apiKey={apiKey} />
          } />
          <Route exact path="/sports" element={
            <News setProgress={setProgress} key="sports" pageSize={pageSize} country={country} category="sports" apiKey={apiKey} />
          } />
          <Route exact path="/technology" element={
            <News setProgress={setProgress} key="technology" pageSize={pageSize} country={country} category="technology" apiKey={apiKey} />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App