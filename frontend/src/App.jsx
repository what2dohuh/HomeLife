
import './App.css'
import NavabarComponent from './components/Navabar.component'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import HomPage from './pages/home.page'
import FooterComponent from './components/Footer.component'
import ListingsPage from './pages/listings.page'
import AboutPage from './pages/about.page'
import ContactusPage from './pages/contactus.page'
function App() {
   
  return (
    <div className="App">
    <Router>
       <NavabarComponent/>
      <Routes>
        <Route path="/" element={<HomPage/>}/>
        <Route path="/listings" element={<ListingsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactusPage />}/>
      </Routes>
      <FooterComponent/>
    </Router>
    </div>
  )
}

export default App
