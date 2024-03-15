import axios from 'axios'

const BASE_URL = 'https://api-server-ujzi.onrender.com'

export const axiosUtils = (url, method, data=null, headers) => {

    return axios({
        url: `${BASE_URL}${url}`,
        method: method,
        data: data,
        headers: headers
    })
}


