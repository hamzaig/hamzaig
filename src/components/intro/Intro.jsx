import './intro.scss'
import { init } from "ityped";
import { useEffect, useRef } from 'react';

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, { showCursor: true, strings: ['MongoDB', 'ExpressJs', 'ReactJs', 'NodeJs'] })
  }, [])

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="./assets/hamzaalikhalid.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Hamza Ali Khalid</h1>
          <h3>Web Developer <span ref={textRef}>Developer</span></h3>
        </div>
        <a href="#portfolio">
          <img src="./assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro
