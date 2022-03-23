import './vendors/bootstrap/bootstrap.min.css';

import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import ExploreComponent from "./components/Tuiter/ExploreScreen/ExploreComponent";
import HomeScreen from "./components/Tuiter/home-screen";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
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