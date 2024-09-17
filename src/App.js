import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"


function App() {
  return (
    <div className="container" style={{ minHeight: '100vh' }}>
    <Header />
    <HomePage />
    <Footer />
    </div >
  )
}

export default App;
