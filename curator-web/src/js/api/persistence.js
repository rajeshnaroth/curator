import { prepend } from 'ramda'
const FLIXLIST = 'flixlist'
export const saveFlixToDB = (channel, curatedList) => {
    return new Promise((resolve, reject) => {
            let listToStore = JSON.parse(localStorage.getItem(FLIXLIST))
            listToStore[channel] = curatedList
            console.log("persistence.js: saving ", listToStore);
                    
            localStorage.setItem(FLIXLIST, JSON.stringify(listToStore))
            resolve(listToStore);
        })
}

export const getFlixFromDB = (channel) => {
    return new Promise((resolve, reject) => {
            console.log("persistence.js: getting ", channel);
            try {
                let storedList = JSON.parse(localStorage.getItem(FLIXLIST))
                resolve(storedList[channel] || [])
            } catch (err) {
                resolve([])
            }
        })
}

export const getChannelsFromDB = () => {
    return new Promise((resolve, reject) => {
            console.log("persistence.js: getting channels ");
            try {
                let storedList = JSON.parse(localStorage.getItem(FLIXLIST))
                resolve(Object.keys(storedList))
            } catch (err) {
                resolve([])
            }
        })
}

export const addChannelAndSaveToDB = (channel) => {
    return new Promise((resolve, reject) => {
            let listToStore = JSON.parse(localStorage.getItem(FLIXLIST))
            //if (channel !== 'default') {
                listToStore[channel] = []
            //}
            localStorage.setItem(FLIXLIST, JSON.stringify(listToStore))
            resolve(Object.keys(listToStore));
        })
}

export const deleteChannelAndSaveToDB = (channel) => {
    return new Promise((resolve, reject) => {
            let listToStore = JSON.parse(localStorage.getItem(FLIXLIST))
            // @todo move this logic out later
            if (channel !== 'default') {
                delete listToStore[channel]
            }
            localStorage.setItem(FLIXLIST, JSON.stringify(listToStore))
            resolve(Object.keys(listToStore));
        })
}

