import "./portfoliolist.scss";

const PortfolioList = ({ title, active, setActive, id }) => {
  return (
    <li className={`portfoliolist ${active && "active"}`} onClick={() => setActive(id)}>
      {title}
    </li>
  )
}

export default PortfolioList
