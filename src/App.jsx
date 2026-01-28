import './css/App.css'
import Home from './page/Home.jsx'
import NavBar from './components/NavBar.jsx'
import {Routes, Route} from 'react-router-dom'
import Favorite from './page/Favorites.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'


function App() {
  return (
    <MovieProvider>
     
      <div>
        <NavBar/>
      </div>
     
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorite/>} />
        </Routes>
      </main>
      </MovieProvider>
  )
}

export default App