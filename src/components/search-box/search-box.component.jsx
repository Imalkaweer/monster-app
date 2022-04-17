import "./search-box.styles.css";

const SearchBox = ({ className, type, placeholder, onChangeHandler }) => 
   (
    <input
      className={`search-box ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );


export default SearchBox;
