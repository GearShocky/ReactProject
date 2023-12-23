import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/games/Malware'
import About from './pages/About'

function App() {
    return <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/games/malware" element={<Games/>}/>
    </Routes>
}


export default App