/* src/Router.js */
import {  Routes, Route } from 'react-router-dom'

import Nav from './Nav.jsx'
import Public from './Public.jsx'
import Profile from './Profile.jsx'
import Protected from './Protected.jsx'
import About from './About.jsx'

const Router = () => {    
  return (
    <Routes>
      <Route path="/" element={<Nav/>}>
        <Route index path ="/" element={<Public/>}/>
        <Route path="/protected" element={<Protected/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>        
        <Route path="*" element={<Public/>}/>
      </Route>
    </Routes>
  )
}

export default Router
