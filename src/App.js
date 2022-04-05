import { Component } from "react";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(
          () => {
            return { monsters: user };
          },
          () => {
            console.log("current State:- ", this.state); //check the current state of state object
          }
        )
      );
  }
  onSearchChange = (event) => {
    console.log("starting array:- ", this.state.monsters);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField };
      },
      () => {
        console.log("Ending Array Status:-", this.state.monsters); //latest state check
      }
    );
  };

  render() {
    //object destructuring ES6 new feature
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filerByMonsterName = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />

        <CardList />
      </div>
    );
  }
}

export default App;
