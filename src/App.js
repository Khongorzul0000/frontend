import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Signup, Login, Home, Left } from "./component";
import {  My } from "./component";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <section>
              <Routes>
                <Route path="/My" element={<My />} />
                {/* <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Left" element={<Home />} /> */}
              </Routes>
            </section>
          </div>
        </Router>
      </div>
      <Left />
    </>
  );
}

export default App;
