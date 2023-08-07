import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import { userInputs, productInputs } from "./contents/form";
import './styles/dark.scss';
import { useContext, useState } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {

  const { darkMode } = useContext(DarkModeContext);
  const [sidebar, setSidebar] = useState(true);

  return (
    <BrowserRouter>
      <div className={darkMode ? 'app dark' : 'app'}>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="app-container">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          <Routes>
            <Route path='/'>
              {/* main */}
              <Route index element={<Home />} />
              <Route path='login' element={<Login />} />
              {/* users table */}
              <Route path='users'>
                <Route index element={<List />} />
                <Route path=':userId' element={<Single />} />
                <Route path='new' element={<New input={userInputs} title='Add New User' />} />
              </Route>
              {/* products table */}
              <Route path='products'>
                <Route index element={<List />} />
                <Route path=':productId' element={<Single />} />
                <Route path='new' element={<New input={productInputs} title='Add New Product' />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
