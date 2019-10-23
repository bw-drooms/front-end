import axiosWithAuth from '../axiosWithAuth'
export const LOG_WITH_AUTH = 'LOG_WITH_AUTH'

export const login = e => {
   axiosWithAuth()
   .post('/login', values)
   .then(res => {
       console.log('login', res.data)
       localStorage.setItem('token', res.data.payload)
       props.history.push('/jobs')
    .catch(err => console.log('Login Error', err))
    })
}