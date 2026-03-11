import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import Heading from "../../components/heading-title/Heading";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <SpecialOffers />
      <Heading title="تسوق حسب المارک" />
      <Brands />
    </>
  );
};

export default Home;
