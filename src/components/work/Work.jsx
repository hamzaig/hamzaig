import { useState } from 'react';
import './work.scss'

const Work = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Task Manager Api",
      desc:
        "Add User Remove User Add Task ... source code is public",
      img:
        "./assets/node/taskmanagerapi.jpg",
      link: "https://github.com/hamzaig/taks-manager-api-node",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "React Food",
      desc:
        "Food App react",
      img:
        "./assets/react/reactFood.jpg",
      link: "https://61e59028d5eabe6f05996d41--amazing-joliot-11c0fb.netlify.app/",

    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Forkify",
      desc:
        "Forkify is a food recipe Showing Application",
      img:
        "./assets/js/forkify.jpg",
      link: "https://forkify-hamzaig.netlify.app/",

    },

  ];
  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
    } else {
      setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
    }
  }
  return (
    <div className='work' id="work">
      <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
        {data.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h1>{d.title}</h1>
                  <p>{d.desc}</p>
                  <span><a href={d.link} target="_blank">Projects</a></span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="./assets/arrow.png" alt="" className="arrow left" onClick={() => handleClick("left")} />
      <img src="./assets/arrow.png" alt="" className="arrow right" onClick={() => handleClick("right")} />
    </div>
  )
}

export default Work
