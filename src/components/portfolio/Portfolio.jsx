import './portfolio.scss';
import PortfolioList from "../portfoliolist/PortfolioList";
import { useState, useEffect } from 'react';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

const Portfolio = () => {
  const [active, setActive] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "webapp",
      title: "Web App"
    },
    {
      id: "mobileapp",
      title: "Mobile App"
    },
    {
      id: "design",
      title: "Design"
    },
    {
      id: "content",
      title: "Content"
    },
  ];
  useEffect(() => {
    switch (active) {
      case "featured":
        setData(featuredPortfolio)
        break;
      case "webapp":
        setData(webPortfolio)
        break;
      case "mobileapp":
        setData(mobilePortfolio)
        break;
      case "design":
        setData(designPortfolio)
        break;
      case "content":
        setData(contentPortfolio)
        break;
      default:
        setData(featuredPortfolio)
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
            <h3>{d.title}</h3>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Portfolio
