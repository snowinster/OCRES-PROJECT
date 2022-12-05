import Home from "./component/Home";
import Inflation from './component/Inflation';
import Settings from './component/Settings'; 
// import Nav from './component/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App() {
    return (


        <Router>
            <div className="Apptest">
                {/* <Nav /> */}
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home />}> </Route>
                        <Route path="/addInflation" element={<Inflation />}> </Route>
                        <Route path="/Settings" element={<Settings />}> </Route> {/* pour voir navaabardisplay */}
                    </Routes>
                </div>
            </div>
        </Router>

    );
}

export default App;