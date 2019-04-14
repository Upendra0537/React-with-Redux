import jsonPlaceholder from "../apis/jsonPlaceholder";
//async action creator
/*export const fetchPost = () => {
    return async function(dispatch,getState) {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type:"FETCH_POST",payload:response})
    }
}*/ 

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type:'FETCH_POSTS',payload:response.data})
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER',payload:response.data})
}