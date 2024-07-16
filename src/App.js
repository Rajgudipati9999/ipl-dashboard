import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import TeamMaches from './components/TeamMatches'
import NotFound  from './components/NotFound'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route path='/team-matches/:id' element={<TeamMaches/>}/>
         <Route errorElement={<NotFound/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App 