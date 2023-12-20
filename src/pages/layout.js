import { Outlet, Link } from "react-router-dom";
import logoImage from '../media/bytelogo.png';	
import logoBg from '../media/Logoback.png';

const Layout = () => {
  return (
    <>
      <header>
			<img className = "logoBg" src={logoBg} alt=""/>
			<img className = "logo" src={logoImage} alt="GearShocky"/>
			<nav>
				<ul>
					<li>
						<a to="/"> Home </a>
					</li>
					<li>
						<a href="about.html"> About </a>
					</li>
					<li>
						<a to="/games"> Games </a>
					</li>
					<li>
						<a href="about.html"> Blog </a>
					</li>
					<li> 
						<a href="booking.html"> Contact </a>
					</li>
				</ul>
			</nav>
		</header>

      <Outlet />
    </>
  )
};

export default Layout;