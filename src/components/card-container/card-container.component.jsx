import { Component } from "react";
import './card-container.styles.css'

class CardContainer extends Component {

    render(){
        const {id, name, email} = this.props.monster;
        return (
          <div className= "card-container" key={id}>
            <img
              alt={`monster ${name}`}
              src={`https://robohash.org/${id}/set=set2&size=180x180`}
            />
            <h1>{name}</h1>
            <p>{email}</p>
          </div>
        );
    }
}

export default CardContainer;