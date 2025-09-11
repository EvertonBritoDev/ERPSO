import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  Home,
  Leads,
  Login,
  Profile,
  Registration,
  Initial,
  ServicesPage,
  Resume,
  ContactPage,
} from './pages'

function App() {
  const ProtectedRoute = () => {
    const checkAuthCookie = Cookies.get('Authorization')
    if (!checkAuthCookie) {
      alert('Autenticação necessária')
      return <Navigate to="/" replace />
    }

    return <Outlet />
  }
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/" element={<Initial />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route path="/ResumePage" element={<Resume />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>
        <Route path="*" element={<span>404 - Not found</span>} />
      </Routes>
    </Router>
  )
}

export default App
