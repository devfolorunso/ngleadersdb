import axios from 'axios'

export const register = newUser => {
    return axios
    .post('api/user/register', newUser, {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        return res.data.user
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}



export const login = user => {

    return axios
    .post('api/user/login',{
        email: user.email,
        password: user.password,
    }, {
        headers: {'Content-Type': 'application/json'}

    })
    .then(res => {
        localStorage.setItem('usertoken', res.data.token)
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

export const getProfile = () => {
    return axios
    .post('api/user/profile',{
        headers: {Authorization: `Bearer ${localStorage.usertoken}`}
    })
    .then(res => {
        console.log(res)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}
