import { Component } from "react";
import CardContainer from "../card-container/card-container.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("render card-list!"); // output: render! twice -> component is re-rendering when calling setState() method and props are getting change!
    console.log("props in card-list component", this.props);
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer monster={monster}/>;
        })}
      </div>
    );
  }
}

export default CardList;
