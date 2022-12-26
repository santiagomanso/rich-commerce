import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import MainContainer from './components/mainContainer/MainContainer'
import Navbar from './components/navbar/Navbar'
import CartScreen from './views/CartScreen/CartScreen'
import HomeScreen from './views/HomeScreen/HomeScreen'
import LoginScreen from './views/LoginScreen/LoginScreen'
import ProfileScreen from './views/ProfileScreen/ProfileScreen'
import CharactersScreen from './views/CharacterScreen/CharactersScreen'
import FloatingBudget from './components/FloatingBudget/FloatingBudget'
import { PlayerProvider } from './context/PlayerContext'
import CategoryScreen from './views/CategoryScreen/CategoryScreen'
import { AuthContextProvider } from './context/AuthContext'

function App() {
  return (
    <AuthContextProvider>
      <PlayerProvider>
        <MainContainer>
          <BrowserRouter>
            <Navbar />
            <FloatingBudget />
            <Routes>
              <Route exact path='/' element={<HomeScreen />} />
              <Route exact path='/characters' element={<CharactersScreen />} />
              <Route exact path='/profile' element={<ProfileScreen />} />
              <Route exact path='/login' element={<LoginScreen />} />
              <Route exact path='/cart' element={<CartScreen />} />
              <Route
                exact
                path='/category/:categoryId'
                element={<CategoryScreen />}
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </MainContainer>
      </PlayerProvider>
    </AuthContextProvider>
  )
}

export default App
