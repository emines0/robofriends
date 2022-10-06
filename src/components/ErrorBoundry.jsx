import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state ={
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {

        if(this.state.hasError){ //checking if error happend
            return <h1>Oooops. That is not goood</h1> //if yes - render return h1 text insted error print
        }
        return this.props.children //if not - render child component

    }
};
export default ErrorBoundry;