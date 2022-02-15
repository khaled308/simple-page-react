import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import HomePage from "./pages/Home"
import MenuPage from './pages/Menu'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App