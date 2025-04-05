import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Jobs from './pages/Jobs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/jobs' element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
