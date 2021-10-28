import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Flights from './components/Flights'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <header className='App-header'>
            <h1>cautious telegram</h1>
            <div className="plane"></div>
            <Nav />
          </header>
          <main>
            <Route path='/flight' component={Flights} />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/car' component={Car} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  )
}

export default App
