import "./search-box.styles.css";

const SearchBox = (props) => {
  const { className, type, placeholder, onChangeHandler } = props;
  return (
    <input
      className={`search-box ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
