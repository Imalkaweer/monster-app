import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("render!");
    const {monsters} = this.props;

    return(
        monsters.map((monster)=>{
          return(
            <h1 key={monster.id}>{monster.name}</h1>
          )
        })
    );
  }
}

export default CardList;
