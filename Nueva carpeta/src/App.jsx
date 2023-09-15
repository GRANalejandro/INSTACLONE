import { useState } from 'react'
import './App.css'
import Profile from './components/profile/Profile'
import Menu from './components/menu/Menu'
import AsideComponent from './components/AsideComponent/AsideComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header'>
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
