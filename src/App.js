import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainContainer from './components/mainContainer/MainContainer'
import Navbar from './components/navbar/Navbar'
import CartScreen from './screens/CartScreen/CartScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'

function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path='/profile' element={<ProfileScreen />} />
          <Route exact path='/login' element={<LoginScreen />} />
          <Route exact path='/cart' element={<CartScreen />} />
        </Routes>
      </BrowserRouter>
    </MainContainer>
  )
}

export default App
