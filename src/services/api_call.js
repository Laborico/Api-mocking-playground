const axios = require('axios');

export async function apiCall() {

    try{
        const response = await axios.post('/api/v1/endpoint');
        console.log('response  ', response)
        return response;
    }catch(error) {
        return error.response;
    }
    
}