import React from "react"
import "./ErrorPage.sass"
import Navbar from "../../Components/Navbar/Navbar"
import Redirect from "../../Components/Error/Error"
import Footer from "../../Components/Footer/Footer"

export default function ErrorPage() {
    return (
        <div className="Error">
            <Navbar />
            <Redirect />
            <Footer />
        </div>
    )
}