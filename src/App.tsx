import React from 'react';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/test_posts' element={<Home/>}/>
        <Route path='/test_posts/posts/:id' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
