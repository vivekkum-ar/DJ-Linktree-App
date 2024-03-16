import { StrictMode, useEffect, useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Terms from './pages/Legal/Terms';
import Privacy from './pages/Legal/Privacy';
import NoPage from './pages/NoPage';
import '@ionic/react/css/core.css';
import { createRoot } from 'react-dom/client';
import { setupIonicReact } from '@ionic/react';
import ForgotPassword from './pages/Forgotpassword';
import { ThemeProvider } from './components/theme-provider';

const App = () => {
  setupIonicReact();
  // Retrieve the theme from localStorage or use 'dark' as the default
  const storedTheme = localStorage.getItem('theme') || 'media';

  // State to manage the theme
  const [theme, setTheme] = useState(storedTheme);

  // Effect to update the localStorage when the theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <StrictMode>
      <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout theme={theme} updateTheme={setTheme} />}>
            <Route index element={<Home theme={theme} updateTheme={setTheme}  />}></Route>
            <Route path='Home' element={<Home theme={theme} updateTheme={setTheme}  />}></Route>
            <Route path='Login' element={<Login />}></Route>
            <Route path='Signup' element={<Signup />}></Route>
            <Route path='Forgotpassword' element={<ForgotPassword />}></Route>
            <Route path='About' element={<About />}></Route>
            <Route path="legal" element={<Terms />} />
            <Route path="legal/terms" element={<Terms />} />
            <Route path="legal/privacypolicy" element={<Privacy />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<App />);