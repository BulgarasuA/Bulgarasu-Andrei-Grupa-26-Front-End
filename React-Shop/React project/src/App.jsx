import './App.css'
import Layout from './components/Layout/Layout';
import HomePage from './components/Pages/Homepage/homePage';
import CartPage from './components/Pages/CartPage/cartpage';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/home' element={<HomePage />}> </Route>
          <Route path='/cart' element={<CartPage />}> </Route>
        </Routes>
      </Layout >
    </BrowserRouter>
  )
}
export default App

