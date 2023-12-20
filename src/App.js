import {Route, Routes} from 'react-router-dom'
import './App.css';
import logoImage from './media/bytelogo.png';	
import logoBg from './media/Logoback.png';
import Home from './pages/Home'
import Games from './pages/games/Malware'

function App() {
    <header>
			<img className = "logoBg" src={logoBg} alt=""/>
			<img className = "logo" src={logoImage} alt="GearShocky"/>
			<nav>
				<ul>
					<li>
						<link to="/">Home</link>
					</li>
                    <li>
						<link to="/games/malware">Games</link>
					</li>
				</ul>
			</nav>
		</header>

    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games/malware" element={<Games/>}/>
    </Routes>

}


export default App