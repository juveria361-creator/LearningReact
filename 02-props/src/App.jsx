import React from 'react'
import Card from './component/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card  user = "Juveria" img = "https://images.unsplash.com/photo-1789969047160-faa621b1c220?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = "Maaz" img = "https://images.unsplash.com/photo-1790020718354-c37c5bb20733?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = "Uzair" img = "https://images.unsplash.com/photo-1789700588149-7d4a5f770236?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = "Ayaan" img="https://images.unsplash.com/photo-1789846958704-d74620ebfe2e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
