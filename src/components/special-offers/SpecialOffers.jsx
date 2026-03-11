import "./special-offers.css";

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <h1 className="special-offers-title">
        عروض کبیره للیوم
        <span className="special-offers-icon-wrapper">
          <i className="bi bi-stopwatch"></i>
          <span className="text">ل 24 ساعة بس</span>
        </span>
      </h1>
    </div>
  );
};

export default SpecialOffers;
