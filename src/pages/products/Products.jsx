import Spinner from "../../components/spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import { useEffect, useState, useMemo} from "react";
import Rating from "../../components/special-offers/Rating";
import { Link } from "react-router-dom";
import "./products.css";
const Products = () => {
  const dispatch = useDispatch();
  const [filterItem, setFilterItem] = useState("all");
  const [sortItem, setSortItem] = useState("nosort");
  let { items, loading } = useSelector((state) => state.products);

  const handleFitler = (e) => {
    setFilterItem(e.target.value);
  };

  const handleSort = (e) => {
    setSortItem(e.target.value);
    console.log(sortItem);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredAndSortedProducts = useMemo(() => {
    // 1. الفلترة أولاً (أسرع)
    let result = [...items]; // نأخذ نسخة دائماً لعدم تعديل الأصل

    if (filterItem !== "all") {
      result = result.filter((product) => product.category === `${filterItem}s`);
    }

    // 2. الترتيب ثانياً (على المصفوفة المصغرة)
    if (sortItem === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortItem === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [items, filterItem, sortItem]);

  if (loading) return <Spinner />;

  return (
    <div className="products">
      <div className="product-sidebar">
        <div className="product-sort-box">
          <h4 className="product-sidebar-title">ترتیب حسب السعر</h4>

          <div className="form-group">
            <input value={"nosort"} onChange={handleSort} type="radio" name="sort" id="noSort" />
            <label htmlFor="noSort">بدون ترتیب</label>
          </div>
          <div className="form-group">
            <input type="radio" name="sort" id="low" value={"low"} onChange={handleSort} />
            <label htmlFor="low"> من الأقل الی الأعلی</label>
          </div>
          <div className="form-group">
            <input type="radio" name="sort" id="high" value={"high"} onChange={handleSort} />
            <label htmlFor="high"> من الأعلی الی الأقل</label>
          </div>
        </div>
        <h4 className="product-sidebar-title">فلتر حسب السلعه</h4>

        <div className="sidebar-item">
          <div className="product-filter">
            <div className="form-group">
              <input
                onChange={handleFitler}
                value="all"
                checked={filterItem === "all"}
                type="radio"
                name="filter"
                id="all"
              />
              <label htmlFor="all">بدون فلتر</label>
            </div>
            <div className="form-group">
              <input
                checked={filterItem === "laptop"}
                onChange={handleFitler}
                value="laptop"
                type="radio"
                name="filter"
                id="laptop"
              />
              <label htmlFor="laptop">لابتوب</label>
            </div>
            <div className="form-group">
              <input
                checked={filterItem === "mobile"}
                onChange={handleFitler}
                value="mobile"
                type="radio"
                name="filter"
                id="mobile"
              />
              <label htmlFor="mobile">جوال</label>
            </div>
          </div>
        </div>
      </div>
      <div className="product-list">
        {filteredAndSortedProducts?.map(({ id, title, image, reviews, price, rating }) => (
          <Link key={id} to={`/products/${id}`} className="product-item">
            <img src={image} alt={title} className="product-item-image" />
            <h3 className="product-item-title">{title}</h3>
            <Rating rating={rating} reviews={reviews} />
            <div className="product-item-price">${price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
