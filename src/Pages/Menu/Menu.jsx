import { Route, Routes, NavLink } from 'react-router-dom'
import MyMenu from './components/MyMenu'
import HomePage from './components/HomePage'
import DriftPage from './components/DriftPage'
import ForzaPage from './components/ForzaPage'
import TimeAttackPage from './components/TimeAttackPage'
import NotFound from './../NotFound/NotFound'

function Menu() {
  return (
    <div className='mainContainer'>
      <MyMenu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/drift/" element={<DriftPage />} />
          <Route path="/timeattack/" element={<TimeAttackPage />} />
          <Route path="/forza/" element={<ForzaPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default Menu