import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import User from './Components/User/User';
import Login from './Components/Login/Login';
import Photo from './Components/Photo/Photo';
import NotFound from './Components/NotFound';
import UserProfile from './Components/User/UserProfile';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import { UserStorage } from './UserContext';

function App() {

  return (
    <>
     <div className='App'>
       <BrowserRouter>
       <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='login/*' element={<Login />}/>
              <Route path='account/*' element={<ProtectedRoute><User /></ProtectedRoute>}/>
              <Route path='photo/:id*' element={<Photo />}/>
              <Route path='profile/:user' element={<UserProfile />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </main>
          <Footer />
        </UserStorage>
       </BrowserRouter>
     </div>
    </>
  )
}

export default App
