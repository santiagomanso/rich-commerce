import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import MainContainer from './components/mainContainer/MainContainer'
import Navbar from './components/navbar/Navbar'
import CartScreen from './Pages/CartScreen/CartScreen'
import HomeScreen from './Pages/HomeScreen/HomeScreen'
import LoginScreen from './Pages/LoginScreen/LoginScreen'
import ProfileScreen from './Pages/ProfileScreen/ProfileScreen'
import CharactersScreen from './Pages/CharacterScreen/CharactersScreen'
import FloatingBudget from './components/FloatingBudget/FloatingBudget'
import { PlayerProvider } from './context/PlayerContext'
import CategoryScreen from './Pages/CategoryScreen/CategoryScreen'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

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
              <Route
                exact
                path='/characters'
                element={
                  <ProtectedRoute>
                    <CharactersScreen />
                  </ProtectedRoute>
                }
              />
              <Route exact path='/profile' element={<ProfileScreen />} />
              <Route exact path='/login' element={<LoginScreen />} />
              <Route
                exact
                path='/cart'
                element={
                  <ProtectedRoute>
                    <CartScreen />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path='/category/:categoryId'
                element={
                  <ProtectedRoute>
                    <CategoryScreen />
                  </ProtectedRoute>
                }
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
