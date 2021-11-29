import { BrowserRouter, Routes, Route} from "react-router-dom"
import About from './About'
import App from "../App"


const Router = () => {
    return (
        
            <BrowserRouter>
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/' exact render={(props)=> (
                    <>
                
                    </>
                )}/>

            </Routes>
          </BrowserRouter>
        
    )
}


export default Router
