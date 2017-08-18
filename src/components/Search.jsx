import React from 'react'
import SearchForm from './SearchForm'
import Thumbnails from './Thumbnails'

class Search extends React.Component{


    constructor(){
        super();
        this.state = {
            photos:[]
        }
    };

    

    /*
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }
    */

    search = (query) => {
        // back tics and dollar, es6 template string
        //const apiURL = `https://api.500px.com/v1/photos/search?consumer_key=5cRfAFfveaz6EPYYqL222GYZU4br4q1u5ORylnyv&term=${query}`
        const apiURL = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${query}&tagmode=any&format=json&nojsoncallback=true`
        
        fetch(apiURL)
            .then(response =>response.json())
            .then(json => {
                console.log(json)
                //this.store.dispatch({type: "update", photos: json.photos})
                this.setState({photos: json.items});
            })
            .catch(error => {
                console.log(error);
            })
        
    }

    render(){
        const { photos } = this.state
        //const { photos } = this.store.getState().photos;
        var rows = [];
        var somePhotos = photos.slice(1,5)
        count = 0
        for (var count = 0; count+4 < photos.length; count+=4) {
            somePhotos = photos.slice(count, count+4)
            rows.push(<Thumbnails photos={somePhotos}/>);
        }
        somePhotos = photos.slice(count, photos.lenght)
        rows.push(<Thumbnails photos={somePhotos}/>);
        return (
            <div>
                <div style={{marginBottom:'10px'}} >
                    <SearchForm onSearch={this.search}/>
                </div>
                {rows}
                
            </div>
        )
    }
}

export default Search;