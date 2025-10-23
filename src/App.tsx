import { Routes, Route, useLocation, Link } from "react-router-dom";
import LoadingPage from "./pages/loadingPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage/>} />
    </Routes>
  )
}

export default App
