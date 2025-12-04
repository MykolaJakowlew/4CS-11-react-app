import './App.css'
// import ItemComponent from './components/item.component/item.component.jsx'
import { ItemComponent, Header } from './components/index.js'
import { itemData } from './item.data.js'
import { Button } from './button.component.jsx'
import { Circle, Component } from './circle.component.jsx'
import { useState } from 'react'
import { Search } from './search.component.js'

function App() {
  const [message, setMessage] = useState("no action")

  const clickOnButton = (event) => {
    const title = event.target.textContent
    console.log("Button was clicked with title:", title)
    message = title
    console.log("message:", message)
    setMessage(title)
  }

  return (
    <>
     {/* <Button />
     <Button />
     <Button />
     <Button /> */}
     <Component />
    </>
  )
}

export default App

