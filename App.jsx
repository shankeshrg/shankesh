import React from 'react'
import Login from './project/Login'
import Page2 from './project/Page2'
import Page3 from './project/Page3'
import Page4 from './project/Page4'
import Page5 from './project/Page5'
import Page6 from './project/Page6'
import Page7 from './project/Page7'
import Page9 from './project/Page9'
import Page8 from './project/Page8'
import {Routes,Route}  from 'react-router-dom'

export default function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="Page2" element={<Page2/>}></Route>
        <Route path="Page3" element={<Page3/>}></Route>
        <Route path="Page4" element={<Page4/>}></Route>
        <Route path="Page5" element={<Page5/>}></Route>
        <Route path="Page6" element={<Page6/>}></Route>
        <Route path="Page7" element={<Page7/>}></Route>
        <Route path="Page8" element={<Page8/>}></Route>
        <Route path="Page9" element={<Page9/>}></Route>
       </Routes>
    </div>

  )
}
