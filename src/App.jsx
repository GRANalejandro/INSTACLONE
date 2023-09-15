import { useState } from 'react'
import './App.css'
import Profile from './components/profile/Profile'
import Menu from './components/Menu/Menu'
import AsideComponent from './components/AsideComponent/AsideComponent'
import MenuToggle from './components/menuToggle/menuToggle'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header'>
        <Menu/>
        <MenuToggle/>
      </header>
      <main className='main'>
        <Profile/>
      </main>
      <aside className='aside'>
        <AsideComponent/>
      </aside>
      <footer></footer>
    </>
  )
}

export default App
