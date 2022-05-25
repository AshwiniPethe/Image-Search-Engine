import React from 'react';

class SearchBar extends React.Component{
    state = {term : ""};

    handleOnSubmit = (event)=>{
        event.preventDefault();
        this.props.searchSubmit(this.state.term);
    }
render(){
    return (
    <div>
        <form 
            onSubmit={this.handleOnSubmit}>
            <label >Search Here : </label>
            <input 
                value = {this.state.term}
                onChange ={(event)=>{
                    this.setState({term:event.target.value});
                    }}     
                type="text"
            />
        </form>
    </div>
    )
    
}
}

export default SearchBar;