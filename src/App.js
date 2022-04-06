import './vendors/bootstrap/bootstrap.min.css';

import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import ExploreComponent from "./components/Tuiter/ExploreScreen/ExploreComponent";
import HomeScreen from "./components/Tuiter/home-screen";
import Navigation from "./components/Tuiter/navigation";
import Tuits from "./a9/Practice/Tuits";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Practice</h1>
        <Link to="/a9/twitter">Twitter</Link>
        <Tuits/>

        <Routes>
          <Route path="/">
            <Route path="navigation" element={<Navigation/>}/>
            <Route path="labs" element={<Labs/>}/>
            <Route path="hello" element={<HelloWorld/>}/>
            <Route path="tuiter" element={<Tuiter/>}>
              <Route index element={<HomeScreen/>}/>
              <Route path="explore" element={<ExploreComponent/>}/>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;