import { Outlet, Link } from "react-router-dom";
import './layout.css';
import logoImage from '../media/bytelogo.png';	
import logoBg from '../media/Logoback.png';

const Layout = () => {
  return (
    <div className="layout">
      <header>
			<img className = "logoBg" src={logoBg} alt=""/>
			<img className = "logo" src={logoImage} alt="GearShocky"/>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
          			<li>
						<Link to="/about">About</Link>
					</li>
          			<li>
						<Link to="/games">Games</Link>
					</li>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
				</ul>
			</nav>
		</header>

      <Outlet />
    </div>
  )
};

export default Layout;