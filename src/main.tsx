import { createContext, StrictMode, useEffect, useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/getting-started/About';
import Terms from './pages/Legal/Terms';
import Privacy from './pages/Legal/Privacy';
import NoPage from './pages/NoPage';
import '@ionic/react/css/core.css';
import { createRoot } from 'react-dom/client';
import { setupIonicReact } from '@ionic/react';
import ForgotPassword from './pages/Forgotpassword';
import { ThemeProvider } from './components/theme-provider';
import { ClerkProvider } from '@clerk/clerk-react'
import {
  RecoilRoot,
  atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';
import GettingStarted from './pages/getting-started/GettingStartedLayout';
import AddingHandles from './pages/getting-started/AddingHandles';
import Services from './pages/getting-started/Services';
import LegalLayout from './pages/Legal/LegalLayout';
import TemplatesLayout from './pages/Templates/TemplatesLayout';
import CustomizationGuide from './pages/Templates/CustomizationGuide';
import Examples from './pages/Templates/Examples';
import Gallery from './pages/Templates/Gallery';
import DataUsage from './pages/Legal/DataUsage';
import Dashboard from './pages/dashboard';
// Define the type for your context (if you have one)
// type ContextType = {
// Define properties, e.g., isLoggedIn: boolean;
//   setUser:any,
//   user:any
// };
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export const UserContext = createContext<any>(null);

export const signUpEmail = atom({
  key: 'signUpEmail', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

const App = () => {
  setupIonicReact();
  const [user, setUser] = useState(null);
  // Retrieve the theme from localStorage or use 'dark' as the default
  const storedTheme = localStorage.getItem('theme') || 'media';

  // State to manage the theme
  const [theme] = useState(storedTheme);

  // Effect to update the localStorage when the theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RecoilRoot>
        <UserContext.Provider value={{ user, setUser }}>
          <ThemeProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<Home />}></Route>
                  <Route path='Home' element={<Home />}></Route>
                  <Route path='Login' element={<Login />}></Route>
                  <Route path='Signup' element={<Signup />}></Route>
                  <Route path='user' element={<Dashboard />}>
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                  </Route>
                  <Route path='Forgotpassword' element={<ForgotPassword />}></Route>
                  <Route path='getting-started' element={<GettingStarted />}>
                    <Route index element={<GettingStarted />} />
                    <Route path="about" element={<About />} />
                    <Route path="adding-your-handles" element={<AddingHandles />} />
                    <Route path="services" element={<Services />} />
                  </Route>
                  <Route path="legal" element={<LegalLayout />} >
                    <Route index element={<DataUsage />} />
                    <Route path="data-usage" element={<DataUsage />} />
                    <Route path="terms-conditions" element={<Terms />} />
                    <Route path="privacy-policy" element={<Privacy />} />
                  </Route>
                  <Route path="templates" element={<TemplatesLayout />} >
                    {/* <Route index element={<TemplatesLayout />} /> */}
                    <Route path="customization-guide" element={<CustomizationGuide />} />
                    <Route path="examples" element={<Examples />} />
                    <Route path="template-gallery" element={<Gallery />} />
                  </Route>
                  
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </UserContext.Provider>
      </RecoilRoot>
      </ClerkProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<App />);