import React from "react"
import "./About.sass"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import Banner from "../../Components/Banner/Banner.jsx"
import AboutBannerImage from "../../Assets/Images/AboutBannerImage.png"
import Dropdown from "../../Components/Dropdown/Dropdown"
import Footer from "../../Components/Footer/Footer"

export default function Home() {
  return (
    <div className="HomePage">
      <Navbar />
      <Banner imageSource={AboutBannerImage} imageAlt="Photo de montagnes" bannerText="" />
      <Dropdown title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
      <Dropdown title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Dropdown title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Dropdown title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes" />
      <Footer />
    </div>
  );
}