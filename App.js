import Footer from './Components/Footer/Footer.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, Router, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import Metarial_Page from './Pages/Metarial_Page.jsx';
import PageCourses from './Pages/PageCourses.jsx';
import Connect from './Pages/Connect.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route  path='/Metarial_Page' exact element={<Metarial_Page />} />
          <Route  path='/PageCourses' exact element={<PageCourses />} />
          <Route  path='/Connect' exact element={<Connect />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
