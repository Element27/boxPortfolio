
import { useEffect, useState } from 'react'
import './App.css'

import BoxColor from './components/BoxColor'
import StackIcons from './components/StackIcons/StackIcons'


function App() {
  const [darkmode, setDarkmode] = useState(true)


  return (
    <div
      style={{ position: 'relative' }}
      className={darkmode ? 'hero-dm' : 'hero'}>

      {/* <div>
        <BoxColor color='red' />
        <BoxColor color='orange' />
        <BoxColor color='yellow' />
        <BoxColor color='green' />
        <BoxColor color='blue' />
        <BoxColor color='indigo' />
        <BoxColor color='violet' />

        <BoxColor color='hotpink' />
        <BoxColor color='skyblue' />
        <BoxColor color='lime' />
        <BoxColor color='maroon' />
        <BoxColor color='black' />
        <BoxColor color='white' />
        <BoxColor color='olive' />
      </div> */}
      <div>
        <StackIcons />
      </div>
    </div>

  )
}

export default App

