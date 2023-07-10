
import { useEffect, useRef, useState } from 'react'
// import './App.css'

import BoxColor from './components/BoxColor'

function App() {
  const [ph, setPh] = useState(10)
  const [pw, setPw] = useState(10)

  const boxWHref = useRef()

  useEffect(() => {
    const w = boxWHref.current.offsetWidth
    const h = boxWHref.current.offsetHeight
    console.log({ "w": w, "h": h })

    setPw(w)
    setPh(h)
  }, [])

  console.log({ "ph": ph, "pw": pw })

  return (

    <div
      ref={boxWHref}
      style={{ position: 'relative', borderColor: "yellow", borderStyle: "solid", borderWidth: "1px", width: "100vw", height: "100vh" }}>
      <BoxColor color='red' />
      <BoxColor color='orange' />
      <BoxColor color='yellow' />
      <BoxColor color='green' />
      <BoxColor color='blue' />
      <BoxColor color='indigo' />
      <BoxColor color='violet' />
      {/* <BoxColor color='gree' /> */}
    </div>

  )
}

export default App

