import { Routes, Route } from "react-router-dom";
import "./App.sass"
import HomePage from "./Pages/Home/HomePage";
import ProductPage from "./Pages/Product/ProductPage"
import AboutPage from "./Pages/About/AboutPage"
import ErrorPage from "./Pages/Error/ErrorPage"

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/logement/:id" element={<ProductPage />}/>
                <Route path="/a_propos" element={<AboutPage />}/>
                <Route path="/*" element={<ErrorPage />}/>
            </Routes>
        </div>
    );
}