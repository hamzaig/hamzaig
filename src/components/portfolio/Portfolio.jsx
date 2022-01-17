import './portfolio.scss';
import PortfolioList from "../portfoliolist/PortfolioList";
import { useState, useEffect } from 'react';
import {
  nodeJs,
  reactJs,
  vanillaJs,
  python,
  htmlCss,
} from "../../data";

const Portfolio = () => {
  const [active, setActive] = useState("nodejs");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "nodejs",
      title: "Node Js"
    },
    {
      id: "reactJs",
      title: "React Js"
    },
    {
      id: "vanillaJs",
      title: "Vanilla Js"
    },
    {
      id: "python",
      title: "Python"
    },
    {
      id: "htmlCss",
      title: "HTML/CSS"
    },
  ];
  useEffect(() => {
    switch (active) {
      case "nodejs":
        setData(nodeJs)
        break;
      case "reactJs":
        setData(reactJs)
        break;
      case "vanillaJs":
        setData(vanillaJs)
        break;
      case "python":
        setData(python)
        break;
      case "htmlCss":
        setData(htmlCss)
        break;
      default:
        setData(nodeJs)
        break;
    }
  }, [active])
  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList key={item.id} title={item.title} active={active === item.id} setActive={setActive} id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <div className="item">
            <img className="item-image" src={d.img} alt={d.img} />
            <h3><a href={d.link} target="_blank">{d.title}</a></h3>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Portfolio
