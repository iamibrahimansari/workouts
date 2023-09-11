import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {
  const navigate = useNavigate();
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : navigate('/login')} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : navigate('/')} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : navigate('/')} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;