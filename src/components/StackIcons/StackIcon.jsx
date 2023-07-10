
import { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
export default function StackIcon({ color, children }) {

  const windowWidth = window.innerWidth

  // if the width of the screen is more than 768px, use 70% of the screen, other wise use the full screen

  const windowHeight = windowWidth > 768 ? (70 / 100) * window.innerHeight : window.innerHeight




  const xCenter = windowWidth / 2
  const yCenter = windowHeight / 2


  const [xAxis, setXAxis] = useState(Math.floor(Math.random() * windowWidth))
  const [yAxis, setYAxis] = useState(Math.floor(Math.random() * windowHeight))
  const [applyColor, setApplyColor] = useState(false)
  const [hideBubble, setHideBubble] = useState(false)

  const boxRef = useRef()


  const randomDuration = Math.floor(Math.random() * ((10000 - 4000 + 1) / 1000)) * 1000 + 4000

  const spring = useSpring({
    from: { x: xCenter, y: yCenter },
    to: { x: xAxis, y: yAxis },
    config: { duration: randomDuration + 1000 }
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
    }, randomDuration)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const styles = {
    bubble: {
      // backgroundColor: `${applyColor ? color : '#CDE5F6'}`,
      display: `${hideBubble ? 'none' : 'flex'}`,
      width: 'fit-content',
      ...spring
    }
  }



  return (
    <animated.div
      ref={boxRef}
      className='' style={styles.bubble}
      onMouseEnter={() => setApplyColor(true)}
      onMouseLeave={() => setApplyColor(false)}
    // onClick={() => setHideBubble(true)}
    // onMouseOver={() => { setApplyColor(true) }}
    >
      <div style={{ color: `${applyColor ? color : 'grey'}` }}>
        {children}
      </div>
    </animated.div>
  )
}
