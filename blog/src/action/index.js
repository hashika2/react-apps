import JasonPlaceholder from '../api/jsonPlaceholder'

export const fetchPosts= () =>async dispatch =>{
    const response =await JasonPlaceholder.get('/posts')
   
           dispatch({
               type:"FETCH_POST",
               payload:response
            }) 
        }
    

    
 
//Tatally fine
// export const selectPost=()=>{
//     return{
//         type:'SELECT_POST'
//     }
// }