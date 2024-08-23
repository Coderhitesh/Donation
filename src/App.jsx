import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import About from "./Pages/About/About"
import DonationPage from "./Pages/Donation/DonationPage"
import DonationDetail from "./Pages/Donation/DonationDetail"
import Contact from "./Pages/Contact/Contact"

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donation" element={<DonationPage />} />
        <Route path="/donation-detail" element={<DonationDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
