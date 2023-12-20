import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/games/Malware'

function App() {
    return <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/games/malware" element={<Games/>}/>
    </Routes>
}


export default App