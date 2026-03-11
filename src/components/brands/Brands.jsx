import { brands } from "../../data/brands";
import "./brands.css";

const Brands = () => {
  return (
    <div className="brands-wrapper">
      {brands.map((brand) => (
        <div key={brand.id} className="brand">
          <img src={brand.image} alt={`brand : ${brand.id} image`} className="brand-image" />
        </div>
      ))}
    </div>
  );
};

export default Brands;
