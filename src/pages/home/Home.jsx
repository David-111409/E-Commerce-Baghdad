import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import Heading from "../../components/heading-title/Heading";
import ScrollToTop from "../../components/scroll-top/scrollTop";
import Slider from "../../components/slider/Slider";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import { useState, useEffect } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetch("https://69b7299effbcd0286094a939.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        
      })
      .catch((err) => {
        console.error("خطأ في جلب البيانات:", err);
        
      });
  }, []);
  const laptops = products.filter((pro) => pro.category === "laptops");
  const mobiles = products.filter((pro) => pro.category === "mobiles");

  return (
    <>
      <ScrollToTop />
      <Banner />
      <Category />
      <SpecialOffers />
      <Heading title="الجديد من اللابتوبات" />
      <Slider data={laptops} />
      <Heading title="الجدید من الجوالات" />
      <Slider data={mobiles} />
      <Heading title="تسوق حسب المارک" />
      <Brands />
    </>
  );
};

export default Home;
