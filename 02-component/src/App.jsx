import React from 'react'
import Card from './component/card'
import Navebar from './component/Navebar'
const App = () => {
  return (
    <div>
      <Navebar/>
      {Card()}
      <Card/>
    </div>
  )
}

export default App
