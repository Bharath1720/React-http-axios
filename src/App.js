import React, { Component } from 'react'
import ContactApp from './components/contact-app/ContactApp'
import Digitalwatch from './components/Digitalwatch'
import UserList from './components/UserList'

class App extends Component {
  render() {
    return (
     <div className='App'>
       <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
          <a href='/' className='navbar-brand'>React HTTP Axios</a>
       </nav>
       {/* <Digitalwatch/> */}
       {/* <UserList/> */}
       <ContactApp/>

     </div>
    )
  }
}


export default App