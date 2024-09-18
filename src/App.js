import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Carausel from "./pages/Carausel/Carausel.js";


function App() {
  return (
    <div className="container-fluid">
    <Header />
    <Carausel/>
    <HomePage />
    <Footer />
    </div >
  )
}

export default App;
