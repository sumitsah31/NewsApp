import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newscomponent from './components/Newscomponent'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar />
      <Routes>
        <Route  path=""  element={<Newscomponent key="start" category="general"/>}/>
        <Route  path="/general" element={<Newscomponent key="general" category="general"/>}/>
        <Route  path="/business" element={<Newscomponent  key="business" category="business"/>}/>
        <Route  path="/science" element={<Newscomponent  key="science" category="science"/>}/>
        <Route  path="/technology" element={<Newscomponent  key="technology" category="technology"/>}/>
        <Route  path="/entertainment" element={<Newscomponent  key="entertainment"  category="entertainment"/>}/>
        <Route  path="/health" element={<Newscomponent  key="health" category="health"/>}/>
        <Route  path="/sports" element={<Newscomponent  key="sports" category="sports"/>}/>
      </Routes>
      </Router>
      </>
    )
  }
}





