import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

// create an axios instance
const service = axios.create({
    timeout: 1000 * 60 * 1 // request timeout
})
//用qs为了get list
const qs = require('qs');
// request interceptor
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        if (config.method === 'get') {
            config.paramsSerializer = function(params) {
            return qs.stringify(params, { arrayFormat: 'repeat' })
            }
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// respone interceptor
service.interceptors.response.use(
    response => {

        const res = response.data
        if (res.code === 404 || res.code === 401 || res.code === 500 || res.code === 503) {
            return response.data
        } else {
            if (res.code === 500) {
                console.log(res.message);
                MessageBox.alert(res.message, '500-系统提示', {
                    type: 'error'
                }).then(() => {

                })
            }
            return Promise.reject('error')
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service