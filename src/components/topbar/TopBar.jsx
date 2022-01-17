import './topbar.scss'
import { Person, Mail, LinkedIn, GitHub } from '@mui/icons-material';

const TopBar = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={'topbar ' + (openMenu && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Hamzaig.</a>
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
        <div className="right">
          <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
