import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product"
import About from "./Pages/About"
import Error from "./Pages/Error"

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/logement" element={<Product />}/>
                <Route path="/a_propos" element={<About />}/>
                <Route path="/*" element={<Error />}/>
            </Routes>
        </div>
    );
}