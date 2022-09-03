import axios from 'axios'

export default axios.create({
    baseURL: 'https://redux-meals-60f58-default-rtdb.europe-west1.firebasedatabase.app'
})