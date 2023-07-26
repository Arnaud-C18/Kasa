import React from "react"
import "./HomePage.sass"
import Navbar from "../../Components/Navbar/Navbar"
import Banner from "../../Components/Banner/Banner"
import HomeBannerImage from "../../Assets/Images/HomeBannerImage.png"
import Card from "../../Components/Card/Card"
import data from "../../Assets/Data/Data.json"
import Footer from "../../Components/Footer/Footer"

export default function HomePage() {
  return (
    <div className="Home">
      <Navbar />
      <Banner imageSource={HomeBannerImage} imageAlt="Photo de falaises en bord de mer" bannerText="Chez vous, partout et ailleurs" />
      <div className="cardContainer">
        {data.map((item) => (
          <Card key={item.id} cardLink={`/logement/${item.id}`} cardSrc={item.cover} cardTitle={item.title} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
