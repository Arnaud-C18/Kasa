import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductPage.sass";
import Navbar from "../../Components/Navbar/Navbar";
import Carousel from "../../Components/Carousel/Carousel";
import Info from "../../Components/Info/Info"
import data from "../../Assets/Data/Data";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Footer from "../../Components/Footer/Footer";


export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [productNotFound, setProductNotFound] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedProduct = data.find((item) => item.id === id);
  
  useEffect(() => {
    if (!selectedProduct) {
      setProductNotFound(true);
    } else {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);
  
  if (!product && !productNotFound) {
    return null;
}
if (productNotFound) {
  navigate("/*");
  return null;
}
const equipments = selectedProduct.equipments.map((attribute, index) => (
  <span key={index} className="equipment">
    {attribute}
  </span>
))


return (
  <div className="Product">
      <Navbar />
      <div className="item">
        <Carousel selectedProduct={selectedProduct} />
        <Info selectedProduct={selectedProduct}/>
      </div>
      <div className="dropdownsContainer">
        <Dropdown title="Description" content={selectedProduct.description} />
        <Dropdown title="Équipements" content={equipments} />
      </div>
      <Footer />
    </div>
  );
}