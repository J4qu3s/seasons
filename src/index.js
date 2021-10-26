import React from "react";
import ReactDom from "react-dom";
import "semantic-ui-css/semantic.min.css";

import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";

class App extends React.Component {

    /* constructor(props) {
        //reference to parents (React.Component) constructor class
        super(props);

        //initialization of state
        //only place where you can do direct assignment to state
        this.state = { 
            lat : null,
            errorMessage : ""
            
        };    
    } */
    state = { 
        lat : null,
        errorMessage : ""
        
    };

    componentDidMount() {
        console.log("Component did mount!");
        window.navigator.geolocation.getCurrentPosition(
            position => {
                //setState of react.component is the only way to update state
                this.setState({lat: position.coords.latitude});
            },
            err => {
                this.setState({errorMessage: err.message});
                console.log(err)
            }
        );
    }

    componentDidUpdate() {
        console.log("Component did update!");
    }

    componentWillUnmount() {
        console.log("Componen unmounted!")
    }

    //Mandatory for react to work
    render() {
             
            if(this.state.errorMessage && !this.state.lat){
                return <div>
                    Error: {this.state.errorMessage}
                </div>
            }
            if(this.state.lat && !this.state.errorMessage){
                return <SeasonDisplay lat={this.state.lat}/>
            }
            return <Loading />;
            
        }      
    
}

ReactDom.render(<App/>, document.querySelector('#root'));