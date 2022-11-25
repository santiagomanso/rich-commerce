import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import MainContainer from './components/mainContainer/MainContainer'
import Navbar from './components/navbar/Navbar'
import Characters from './views/CharacterScreen/Characters'
import CartScreen from './views/CartScreen/CartScreen'
import HomeScreen from './views/HomeScreen/HomeScreen'
import LoginScreen from './views/LoginScreen/LoginScreen'
import ProfileScreen from './views/ProfileScreen/ProfileScreen'

function App() {
  return (
    <MainContainer>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path='/characters' element={<Characters />} />
          <Route exact path='/profile' element={<ProfileScreen />} />
          <Route exact path='/login' element={<LoginScreen />} />
          <Route exact path='/cart' element={<CartScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainContainer>
  )
}

export default App
