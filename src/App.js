import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Record from './pages/record/Record';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { useDispatch, useSelector } from 'react-redux'
import { setServices } from './store/slices/services-slice';
import { services } from './data/services';

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setServices(services))
  }, [])

  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }, [user])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/record' element={<Record />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
