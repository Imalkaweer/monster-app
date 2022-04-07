import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("render card-list!"); // output: render! twice -> component is re-rendering when calling setState() method and props are getting change!
    console.log("props in card-list component", this.props);
    const { monsters } = this.props;

    return monsters.map((monster) => {
      return <h1 key={monster.id}>{monster.name}</h1>;
    });
  }
}

export default CardList;
