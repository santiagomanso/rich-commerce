import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route exact path='/profile' element={<ProfileScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
