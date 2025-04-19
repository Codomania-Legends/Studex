import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RouterEle from './Components/DynamicRoute/RouterEle.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to={"/home"} />}></Route>
      <Route path='/:route' element={<RouterEle/>}></Route>
    </Routes>
  </BrowserRouter>,
)
