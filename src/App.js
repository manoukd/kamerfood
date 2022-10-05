import
{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom" 

 

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About"
import Settings from "./pages/Settings"


import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>      
      </div>
      <Footer/>
    </Router>

   );
}

export default App;
