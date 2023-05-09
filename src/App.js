import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './screens/AllProducts';
import Login from './loginScreens/Login';
import Register from './loginScreens/Register';
import { Helmet } from "react-helmet";
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import PrivacyPolicy from './screens/PrivacyPolicy';


function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Actus Technologies</title>
        <meta
          name="description"
          content="Actus Technologies private limited, HR solutions, IT Staffing"
        />
        <meta
          name="keywords"
          content="Actus Technologies private limited, HR solutions, IT Staffing"
        />
      </Helmet>
      <Routes>
        <Route path='/' element={<AllProducts />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
