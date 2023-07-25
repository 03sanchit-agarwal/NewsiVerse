import './App.css';

//writing rcc to create class based component
import React, {CuseState, useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route, UNSAFE_DataRouterStateContext,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =() => {
  const pageSize=9;
  const apiKey = process.env.REACT_APP_NEWS_API;  

const [ progress, setProgress ] = useState(0)
   return (
      <div>
        <Router>
      <NavBar />
      
      <LoadingBar
      height = {3.5}
        color='#f11946'
        progress={progress}
     />

     <Routes>
          <Route path="/" element={<News setProgress = {setProgress} apiKey = {apiKey}  key='Gen' pageSize={pageSize}  country="in" category="Gen"/>}></Route>
          <Route path="/Business" element={ <News setProgress = {setProgress} apiKey = {apiKey}   key='business'  pageSize={pageSize}  country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey}   key='entertainment'  pageSize={pageSize}  country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News setProgress = {setProgress}  apiKey = {apiKey}  key='general'  pageSize={pageSize}  country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News setProgress = {setProgress} apiKey = {apiKey}   key='health'  pageSize={pageSize}  country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News setProgress = {setProgress}  apiKey = {apiKey}  key='science'  pageSize={pageSize}  country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News setProgress = {setProgress}  apiKey = {apiKey}  key='sports'  pageSize={pageSize}  country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News setProgress = {setProgress} apiKey = {apiKey}    key='technology}>' pageSize={pageSize}  country="in" category="technology"/>}></Route>

        </Routes>

     </Router>
      </div>
    )
  
}

export default App;