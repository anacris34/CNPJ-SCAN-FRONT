import { Routes, Route, useLocation, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProcessPage from './pages/ProcessPage';

function App() {

  return (
    
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/page2" element={<ProcessPage/>} />
    </Routes>
    
  );
}



export default App;