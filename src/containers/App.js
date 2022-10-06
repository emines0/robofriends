import React, { Component }from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Sccroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';


class  App extends Component {
    constructor() { //for declaring state
        super() //calling constructor of component
        this.state = { //states are what changing the app
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){  
        //https://reactjs.org/docs/react-component.html
        //is invoked immediately after a component is mounted (inserted into the tree).

        //when website is loaded i ask for users from
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({robots: users}));   
            const urls = [
                "https://jsonplaceholder.typicode.com/users"
              ];
              
              const getData = async function () {
                try {    
                  const [users] = await Promise.all(
                    urls.map(async function (url) {
                      const response = await fetch(url);
                      return response.json();
                    }),
                  );                
                  return users
                } catch (err) {
                  console.log("ooooooops", err);
                }
              };
        

              getData()
              .then(users => {
                this.setState({ robots: users });
              })
              .catch(error => this.setState({ error: error.message }));
    }

    onSearchChange = (event) => { //arrow function secure that this will get the component where the function is created not used 
        this.setState({searchfield:event.target.value}) //changing state of the search box to what the user writing
    }
 
    render() {
        const {robots, searchfield} = this.state //defining statest to not use this.
        const filteredRobots = robots.filter(robot => { //filter robots json and returns robots includes what is in the searchfield input
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>LOADING</h1> :  //if no robots return loading if robot exist return robot list
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Sccroll>
                    <ErrorBoundry> {/* preventing users see wierd errors if something ffails */}
                        <CardList robots={filteredRobots}/>  {/*parent component of Card where Cards are rendered*/}
                    </ErrorBoundry>
                </Sccroll>
            </div>
        );
    }
}
export default App;