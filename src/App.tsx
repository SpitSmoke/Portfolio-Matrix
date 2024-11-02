import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./Styles/GlobalStyles";
import MatrixBackground from "./Componentes/MatrixBackground/MatrixBackground";
import Home from "./Pages/Home/Home";
import Projects from './Pages/Projects/Projects'
import Navbar from "./Componentes/NavBar/NavBar";

const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <MatrixBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  </>
)

export default App;
