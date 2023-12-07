import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import User from './Components/User/User';
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import { UserStorage } from './UserContext';

function App() {

  return (
    <>
     <div>
       <BrowserRouter>
       <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='login/*' element={<Login />}/>
            <Route path='account/*' element={<ProtectedRoute><User /></ProtectedRoute>}/>
          </Routes>
          <Footer />
        </UserStorage>
       </BrowserRouter>
     </div>
    </>
  )
}

export default App
