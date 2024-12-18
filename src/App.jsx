import { useState } from 'react'

import Header from './components/Header';
import Main from './components/Main';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Footer from './components/Footer';

import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header onIsOpen={isOpen} onSetIsOpen={setIsOpen} />
      <Main />
      <Section1 />
      <Section2 />
      <Footer />
    </>
  )
}

export default App
