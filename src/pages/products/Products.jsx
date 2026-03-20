import Spinner from "../../components/spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import { useEffect, useState, useMemo } from "react";
import Rating from "../../components/special-offers/Rating";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  const dispatch = useDispatch();
  const [filterItem, setFilterItem] = useState("all");
  const [sortItem, setSortItem] = useState("nosort");

  // --- إضافات الترقيم ---
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  let { items, loading } = useSelector((state) => state.products);

  const handleFitler = (e) => {
    setFilterItem(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (e) => {
    setSortItem(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...items];

    if (filterItem !== "all") {
      result = result.filter((product) => product.category === `${filterItem}s`);
    }

    if (sortItem === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortItem === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [items, filterItem, sortItem]);

  // --- حسابات الترقيم ---
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, startIndex + productsPerPage);

  // إعادة الترقيم للصفحة 1 عند تغيير الفلتر

  if (loading) return <Spinner />;

  return (
    <div className="products">
      <div className="product-sidebar">
        <div className="product-sort-box">
          <h4 className="product-sidebar-title">ترتیب حسب السعر</h4>
          <div className="form-group">
            <input
              checked={sortItem === "nosort"}
              value={"nosort"}
              onChange={handleSort}
              type="radio"
              name="sort"
              id="noSort"
            />
            <label htmlFor="noSort">بدون ترتیب</label>
          </div>
          <div className="form-group">
            <input
              checked={sortItem === "low"}
              type="radio"
              name="sort"
              id="low"
              value={"low"}
              onChange={handleSort}
            />
            <label htmlFor="low"> من الأقل الی الأعلی</label>
          </div>
          <div className="form-group">
            <input
              checked={sortItem === "high"}
              type="radio"
              name="sort"
              id="high"
              value={"high"}
              onChange={handleSort}
            />
            <label htmlFor="high"> من الأعلی الی الأقل</label>
          </div>
        </div>

        <div className="sidebar-item">
          <h4 className="product-sidebar-title">فلتر حسب السلعه</h4>
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

      <div className="product-wrapper">
        <div className="product-list">
          {currentProducts?.map(({ id, title, image, reviews, price, rating }) => (
            <Link key={id} to={`/products/${id}`} className="product-item">
              <img src={image} alt={title} className="product-item-image" />
              <h3 className="product-item-title">{title}</h3>
              <Rating rating={rating} reviews={reviews} />
              <div className="product-item-price">${price}</div>
            </Link>
          ))}
        </div>

        {/* أزرار الترقيم */}
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="page-btn"
          >
            السابق
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "page-btn active" : "page-btn"}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="page-btn"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
