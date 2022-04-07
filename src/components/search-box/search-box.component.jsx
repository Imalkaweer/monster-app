import { Component } from "react";

class SearchBox extends Component {
  render() {
    console.log("render search box!");
    console.log("props in search-box", this.props);
    const { className, type, placeholder, onChangeHandler } = this.props;
    return (
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;