import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header/Header'
import HeroSection from './components/hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <HeroSection 
          title="Enjoy Your Morning Coffee"
          description="Start your day refreshingly with premium coffee beans. The perfect blend for a perfect morning."
          buttonText="Order Now"
          backgroundImage="/path/to/your/coffee-image.jpg"
        />
    </>
  )
}

export default App
