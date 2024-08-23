import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs } from './Pages/aboutUs.jsx';
import { Home } from './Pages/home.jsx';
import { PinpointPoacher } from './Pages/pinpointPoacher.jsx';

function App() {
  return (
    <>
      <div className='app-container'>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Pages/aboutUs" element={<AboutUs />} />
            <Route path="/Pages/pinpointPoacher" element={<PinpointPoacher />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;