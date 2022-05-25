import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './searchbar';
import ImageList from './imageList';
import imageList from './imageList';

class App extends React.Component {
    state = {imageList : []}
    handleSearchSubmit =async (term)=>{
        const response = await unsplash.get("/search/photos",{
            params:{
                query:term,
            },
        });
        this.setState({imageList:response.data.results});
    };

    render(){    
        return <div>
            <SearchBar searchSubmit = {this.handleSearchSubmit}/>
            <ImageList imageList = {this.state.imageList}/>
        </div>
    }
    

}

export default App;