import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Signup, Login, Home } from "./component";
import { Date2, Search, My} from "./component";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </section>
        </div>
      </Router>
    </div>
    
   
  );
}

export default App;