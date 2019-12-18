import JasonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';


export const fetchPosts= () =>async dispatch =>{
    const response =await JasonPlaceholder.get('/posts')
   
           dispatch({
               type:'FETCH_POST',
               payload:response.data
            }) 
        }
// export const fetchUser=(id) =>async dispatch =>{
//     const response =await JasonPlaceholder.get(`/users/$id`);
//           dispatch({
//              type:'FETCH_USER',
//              payload:response.data
//          })
// }

export const fetchUser =function(id){
    return _.memoize(async function(dispatch){
        const response =await JasonPlaceholder.get(`/users/$id`);
          dispatch({
             type:'FETCH_USER',
             payload:response.data
         })
    }
    )
}
