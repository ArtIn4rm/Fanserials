import {$host, $auth} from './index'
import jwt_decode from 'jwt-decode'

export const registration = async (email, password, info) => {
    const {data} = await $host.post('/user/registrate', {email, password, role: 'Admin', info})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('/user/login', {email, password})
    console.log(data)
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $auth.get('/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

