import './Games.css';
import { Outlet, Link  } from "react-router-dom";
import MwLink from '../../media/games/Malwarecover.png'
import Layout from '../layout'

function Games() {
  return (
    <div className="App">

      <div className="container">

      </div>
      <div className="bigfade">

      </div>
        <div>
      <Layout />
      </div>
      <nav>
        <Link to="/games/malware">
            <img src={MwLink} alt="MALWARE" className="mwCover" />
        </Link>
        </nav>
      <Outlet />
    </div>
    
  );
}

export default Games;