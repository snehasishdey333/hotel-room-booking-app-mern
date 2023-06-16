
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import List from './pages/List/List.jsx'
import Hotel from './pages/Hotel/Hotel.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Account from './pages/Account/Account.jsx'
import { UserContextProvider } from './Context/UserContext.jsx'
import LogOut from './pages/LogOut/LogOut.jsx'

const App = () => {
  return (
    
        <UserContextProvider>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path='/room/search/:place' element={<List/>}/>
        <Route exact path='/rooms/:id' element={<Hotel/>}/>
        <Route exact path="/account/:id" element={<Account/>} />
        <Route exact path="/logout" element={<LogOut/>} />
        </Routes>
        </UserContextProvider>
     
    
  )
}

export default App

