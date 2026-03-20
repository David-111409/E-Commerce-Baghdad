import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import Category from "../../components/category/Category";
import Heading from "../../components/heading-title/Heading";
import ScrollToTop from "../../components/scroll-top/scrollTop";
import Slider from "../../components/slider/Slider";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
const Home = () => {
  const dispatch = useDispatch();
 
  const { items, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
   
  }, [dispatch, items]);

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  const laptops = items.filter((pro) => pro.category === "laptops");
  const mobiles = items.filter((pro) => pro.category === "mobiles");

  return (
    <>
      <ScrollToTop />
      <Banner />
      <Category />
      {loading ? (
        <Spinner /> 
      ) : (
        <>
          <SpecialOffers />
          <Heading title="الجديد من اللابتوبات" />
          <Slider data={laptops} />
          <Heading title="الجدید من الجوالات" />
          <Slider data={mobiles} />
        </>
      )}
      <Heading title="تسوق حسب المارک" />
      <Brands />
    </>
  );
};

export default Home;
