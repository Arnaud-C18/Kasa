import React from "react"
import "./Error.sass"
import Navbar from "../../Components/Navbar/Navbar"
import Redirect from "../../Components/Redirect/Redirect"
import Footer from "../../Components/Footer/Footer"

export default function Error() {
    return (
        <div className="error">
            <Navbar />
            <Redirect />
            <Footer />
        </div>
    )
}