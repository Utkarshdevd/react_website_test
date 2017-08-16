import React from 'react'
import SearchForm from './SearchForm'
import Thumbnails from './Thumbnails'

class Search extends React.Component{

    /*
    constructor(){
        super();
        this.state = {
            photos:[]
        }
    }
    */

    constructor(props) {
        super(props);
        this.store = this.props.store;
      }

    search = (query) => {
        // back tics and dollar, es6 template string
        const apiURL = `https://api.500px.com/v1/photos/search?consumer_key=5cRfAFfveaz6EPYYqL222GYZU4br4q1u5ORylnyv&term=${query}`
        fetch(apiURL)
            .then(response => response.json())
            .then(json => {
                this.store.dispatch({type: "update", photos: json.photos})
                this.setState({photos: json.photos});
                console.log(json)
            })
            .catch(error => {
                console.log(error);
            })
    }

    render(){
        //const { photos } = this.state
        const { photos } = this.store.getState().photos;
        return (
            <div>
                <div style={{marginBottom:'10px'}} >
                    <SearchForm onSearch={this.search}/>
                </div>
                <Thumbnails photos={photos}/>
            </div>
        )
    }
}

export default Search;