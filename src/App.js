import { Routes, Route } from "react-router-dom";
import "./App.sass"
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product"
import About from "./Pages/About/About"
import Error from "./Pages/Error/Error"

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/logement/:id" element={<Product />}/>
                <Route path="/a_propos" element={<About />}/>
                <Route path="/*" element={<Error />}/>
            </Routes>
        </div>
    );
}