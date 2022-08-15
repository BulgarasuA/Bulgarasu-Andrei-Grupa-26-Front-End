import './App.css'

import Layout from './components/Layout/Layout';
import HomePage from './components/Pages/Homepage/homePage';
import AboutPage from './components/Pages/AboutPage/aboutPage';

function App() {

  return (
    <Layout >
      <AboutPage />
      <HomePage />
    </Layout >
  )
}

export default App
