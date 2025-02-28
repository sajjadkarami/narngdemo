
import './App.css'
import Header from './components/Header'
import SiteFooter from './components/SiteFooter'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CityPage from './components/CityPage';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:cityId" element={<CityPage />} />
      </Routes>
      <SiteFooter />
    </Router>
  )
}

export default App


