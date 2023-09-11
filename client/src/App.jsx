import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

const App = () => {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            {
              user ?
              <>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Home />} />
                <Route path="/signup" element={<Home />} />
              </> :
              <>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </>
            }
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;