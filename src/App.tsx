import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from '@/pages/home';
import Header from '@/components/layout/Header/Header.tsx';
import Jokes from '@/pages/jokes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  return (
    <Router>
      <ToastContainer />
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  )
}
