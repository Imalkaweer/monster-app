import { Component } from "react";

class CardContainer extends Component {

    render(){
        const {cardContainer, id, name, email} = this.props;
        return (
          <div className={cardContainer} key={id}>
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