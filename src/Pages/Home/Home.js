import React from "react"
import "./Home.sass"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import Banner from "../../Components/Banner/Banner.jsx"
import HomeBannerImage from "../../Assets/Images/HomeBannerImage.png"

export default function Home() {
  return (
    <div className="HomePage">
      <Navbar />
      <Banner imageSource={HomeBannerImage} imageAlt="Photo de falaises en bord de mer" />
    </div>
  );
}
