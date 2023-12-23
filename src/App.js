import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/games/Games'
import Malware from './pages/games/Malware'
import About from './pages/About'
import Blog from './pages/blog/Blog'
import Layout from './pages/layout'

function App() {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/games" element={<Games />}>
                <Route path="/games/malware" element={<Malware />} />
            </Route>
            <Route path="/blog" element={<Blog />}></Route>
        </Routes>
    )
}


export default App