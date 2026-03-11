import "./heading.css";
const Heading = ({ title }) => {
  return (
    <div className="title-wrapper">
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default Heading;
