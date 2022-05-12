import {$auth} from './index'

export const addSerial = async (operation, info) => {
    switch(operation){
        case 'delete': {
            const {data} = await $auth.delete('/user/admin/adding', {code: "serial", info})
            return data
        }
        case 'update': { 
            const {data} = await $auth.update('/user/admin/adding', {code: "serial", info})
            return data
        }
        case 'create': { 
            const {data} = await $auth.post('/user/admin/adding', {code: "serial", info})
            return data
        }
        default: {return null}
    }
}

export const addSeria = async (operation, info) => {
    switch(operation){
        case 'delete': {
            const {data} = await $auth.delete('/user/admin/adding', {code: "seria", info})
            return data
        }
        case 'update': { 
            const {data} = await $auth.update('/user/admin/adding', {code: "seria", info})
            return data
        }
        case 'create': { 
            const {data} = await $auth.post('/user/admin/adding', {code: "seria", info})
            return data
        }
        default: {return null}
    }
}

export const addStudio = async (operation, info) => {
    switch(operation){
        case 'delete': {
            const {data} = await $auth.delete('/user/admin/adding', {code: "studio", info})
            return data
        }
        case 'create': { 
            const {data} = await $auth.post('/user/admin/adding', {code: "studio", info})
            return data
        }
        default: {return null}
    }
}

export const taskReady = async (id) => {
    const {data} = await $auth.post('/user/admin/adding', {code: "task", id})
    return data
}

export const answerMod = async (id, answer) => {
    const {data} = await $auth.post('/user/admin/adding', {code: "answer", id, answer})
    return data
}