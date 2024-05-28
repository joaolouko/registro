import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './components/pages/Inicio'
import ListaUsers from './components/pages/ListaUsers'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/users' element={<ListaUsers/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
