import { useState } from 'react';
//import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css'

const App = ()=>{

    const [searchField, setSearchField] = useState('');
    console.log("render");
    const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    };
    console.log(searchField)
  return (
    
    <div className="App">
      <h1 className="app-title">Monster App</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        type="search"
        className="monsters-search-box"
      />
    </div>
  );
}
// class component convert into functional component-->

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((user) =>
//         this.setState(() => {
//           return { monsters: user };
//         })
//       );
//   }
//   onSearchChange = (event) => {
//     console.log("starting array:- ", this.state.monsters);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     //object destructuring ES6 new feature
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filerByMonsterName = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//       <h1 className="app-title">Monster App</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monsters"
//           type="search"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filerByMonsterName} />
//       </div>
//     );
//   }
// }

export default App;
