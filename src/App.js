import Global from './components/Global';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import About from './components/About'

function App () {

  return (

      <BrowserRouter>
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/' element={<Global/>}/>

            </Routes>
          </BrowserRouter>
  )
}



export default App
