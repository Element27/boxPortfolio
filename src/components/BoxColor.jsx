
import './BoxColor.css'
import { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'


export default function BoxColor({ color }) {
  // console.log(parentSize)

  const windowWidth = window.innerWidth
  const windowHeight = (50 / 100) * window.innerHeight




  const xCenter = windowWidth / 2
  const yCenter = windowHeight / 2


  const [xAxis, setXAxis] = useState(Math.floor(Math.random() * windowWidth))
  const [yAxis, setYAxis] = useState(Math.floor(Math.random() * windowHeight))

  const boxRef = useRef()

  const spring = useSpring({
    from: { x: xCenter, y: yCenter },
    to: { x: xAxis, y: yAxis },
    config: { duration: 7000 }
  })


  // this function generates random digits based on the axis given to it
  const randomCoord = (reference) => {
    const rand = Math.floor(Math.random() * reference)
    // when we sunbtract rand from reference and the result is greater than 50, pass the rand. otherwise, subtract 50 from the rand. this is meant to prevent the boxes from going out of the frame of view
    const res = reference - rand > 50 ? rand : rand - 50
    // console.log(res)
    return res
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setXAxis(randomCoord(windowWidth))
      setYAxis(randomCoord(windowHeight))
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  console.log("xyais", xAxis, yAxis)

  return (
    <animated.div
      ref={boxRef}
      className='boxColor' style={{ backgroundColor: `${color}`, ...spring }}>{color}</animated.div>
  )
}
