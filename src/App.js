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
import { AuthContextProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import HowToPlayScreen from './Pages/HowToPlayScreen/HowToPlayScreen'
import ProductsScreen from './Pages/ProductsScreen/ProductsScreen'
import { RedirectProvider } from './context/RedirectContext'
import CategoriesScreen from './Pages/CategoriesScreen/CategoriesScreen'
import { LanguageProvider } from './context/LanguageContext'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import RegisterScreen from './Pages/RegisterScreen/RegisterScreen'
import ResetScreen from './Pages/ResetScreen/ResetScreen'

function App() {
  return (
    <AuthContextProvider>
      <PlayerProvider>
        <CartProvider>
          <RedirectProvider>
            <LanguageProvider>
              <BrowserRouter>
                <MainContainer>
                  <Navbar />
                  <ScrollToTop />
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
                      path='/howtoplay'
                      element={<HowToPlayScreen />}
                    />
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
                      path='/categories'
                      element={
                        <ProtectedRoute>
                          <CategoriesScreen />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      exact
                      path='/products/:categoryId'
                      element={
                        <ProtectedRoute>
                          <ProductsScreen />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      exact
                      path='/register'
                      element={<RegisterScreen />}
                    />
                    <Route exact path='/reset' element={<ResetScreen />} />
                  </Routes>
                  <Footer />
                </MainContainer>
              </BrowserRouter>
            </LanguageProvider>
          </RedirectProvider>
        </CartProvider>
      </PlayerProvider>
    </AuthContextProvider>
  )
}

export default App
