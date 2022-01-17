import "./menu.scss";
import { Person, Mail, LinkedIn, GitHub } from '@mui/icons-material';

const Menu = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={"menu " + (openMenu && "active")}>
      <ul>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#work">Works</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="contacts-container">
        <div className="itemContainer">
          <Person className='icon' />
          <span>+92 305 7777911</span>
        </div>
        <div className="itemContainer">
          <Mail className='icon' />
          <span>hamzaig@yahoo.com</span>
        </div>
        <div className="itemContainer">
          <LinkedIn className='icon' />
          <span><a href="https://www.linkedin.com/in/hamzaig/" target="_blank">/in/hamzaig</a></span>
        </div>
        <div className="itemContainer">
          <GitHub className='icon' />
          <span><a href="https://github.com/hamzaig" target="_blank">/hamzaig</a></span>
        </div>
      </div>
    </div>
  )
}

export default Menu
