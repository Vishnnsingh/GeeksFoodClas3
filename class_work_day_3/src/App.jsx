import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import Header from './components/header/Header'
import MainSection from './components/main/MainSection'
import Footer from './components/footer/Footer'
import Grid from './components/grid/Grid'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <MainSection />
    <Grid />
    <Footer />
    </>
  )
}

export default App
