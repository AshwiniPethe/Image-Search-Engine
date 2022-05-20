import React from 'react';
import SeasonDisplay from './SeasonDisplay';

// const App = ()=>{
//     navigator.geolocation.getCurrentPosition((position)=>console.log(position.coords.latitude),(error)/////// //=>console.log(error));
//     return <div><SeasonDisplay latitude={position.coords.latitude}/></div>
// }


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={latitude:null , errorMessage:""};
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({
                    latitude:position.coords.latitude
                })
            },
            (error)=>{
                this.setState({
                    errorMessage:error.message
                })
            }
        );
    }
    render(){

        if(this.state.latitude && !this.state.errorMessage){
            
            return(
                <SeasonDisplay latitude={this.state.latitude}/>
                
            );
        }
        else if(!this.state.latitude && this.state.errorMessage){
            return(
                <div>
                    <h1>errorMessage  : {this.state.errorMessage}</h1>
                </div>
            );
        }
        
        return(
            <div>
                <h1>loading</h1>
            </div>
        );
    };
    
}
export default App; 