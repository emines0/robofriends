import React, { Component }from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Sccroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';


class  App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));   
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
    }
 
    render() {
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>LOADING</h1> :  //if no robots return loading if robot exist return robot list
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Sccroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Sccroll>
            </div>
        );
    }
}
export default App;