import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization :'Client-ID ddf2190ccf17f5223950452c547e987db72a63b4b4a88d1be6f32aaa3cdc07b1'
    }
})