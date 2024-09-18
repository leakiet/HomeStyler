import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { Routes } from "react-router-dom";


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <HomePage />
      <Footer />
    </div >
  )
}

export default App;
