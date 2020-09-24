import axios from 'axios'
const instance = axios.create({
    baseUrl: 'http://localhost:5001/fir-4310b/us-central1/api/'
})

export default axios