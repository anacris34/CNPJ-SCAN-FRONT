import { Routes, Route, useLocation, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProcessPage from './pages/ProcessPage';
import DownloadPage from './pages/DownloadPage';

function App() {

  return (
    
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/page2" element={<ProcessPage/>} />
      <Route path="/download" element={<DownloadPage/>} />
    </Routes>
    
  );
}



export default App;