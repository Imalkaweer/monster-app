import { Component } from "react";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log("render card-list!"); // output: render! twice -> component is re-rendering when calling setState() method and props are getting change!
    console.log("props in card-list component", this.props);
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const {id, name, email} = monster;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}/set=set2&size=180x180`}
              />
              <h1>{name}</h1>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
