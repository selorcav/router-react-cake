import NavBar from "./assets/components/NavBar"
import { Route, Routes } from "react-router-dom";

import Home from "./assets/views/Home";
import Contact from "./assets/views/Contact";

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

    </>
  )
}

export default App
