const initialState = {
    photos: []
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'update':
        console.log("Updating photos array")
        return Object.assign({}, state, {
          photos: state.photos
        })
      default:
        return state
    }
  }