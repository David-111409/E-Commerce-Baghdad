import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import Heading from "../../components/heading-title/Heading";
import ScrollToTop from "../../components/scroll-top/scrollTop";
// import Slider from "../../components/slider/Slider";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Banner />
      <Category />
      <SpecialOffers />
      <Heading title="الجديد من اللابتوبات" />
      <Heading title="الجدید من الجوالات" />
      {/* <Slider /> */}
      <Heading title="تسوق حسب المارک" />
      <Brands />
    </>
  );
};

export default Home;
