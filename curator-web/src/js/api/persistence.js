const FLIXLIST = 'flixlist'

import {customPlaylistId} from '../utils'

export const saveChannelToDB = (channel, curatedList) => {
    return new Promise((resolve, reject) => {
            let listToStore = JSON.parse(localStorage.getItem(FLIXLIST)) || {}
            listToStore[channel] = curatedList
            console.log("persistence.js: saving ", channel, listToStore);
            try {        
                localStorage.setItem(FLIXLIST, JSON.stringify(listToStore))
            } catch (e) {
                reject(e)
            }
            resolve(listToStore);
        })
}

export const getChannelFromDB = (channel) => {
    return new Promise((resolve, reject) => {
            try {
                let storedList = JSON.parse(localStorage.getItem(FLIXLIST))
                resolve((storedList && storedList[channel]) ? storedList[channel] : null)
            } catch (err) {
                resolve(null)
            }
        })
}

// returns just an array of channel names
export const getChannelDetailsFromDB = () => {
    return new Promise((resolve, reject) => {
            try {
                let storedList = JSON.parse(localStorage.getItem(FLIXLIST))
                resolve(storedList)
            } catch (err) {
                resolve([])
            }
        })
}

// returns just an array of channel names
export const getChannelSummaryFromDB = () => {
    return new Promise((resolve, reject) => {
            try {
                let storedList = JSON.parse(localStorage.getItem(FLIXLIST))
                resolve(Object.keys(storedList).map(channelKey => ({id: channelKey, title: storedList[channelKey].details.title }) ))
            } catch (err) {
                resolve([])
            }
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
            //resolve(Object.keys(listToStore));
            resolve(Object.keys(listToStore).map(channelKey => ({id: channelKey, title: listToStore[channelKey].details.title }) ))
        })
}

export const addChannelAndSaveToDB = (channel) => {
    return new Promise((resolve, reject) => {
            let listToStore = JSON.parse(localStorage.getItem(FLIXLIST)) || {}
            listToStore[channel] = { 
                details:{title:channel},
                playlists: [
                    { 
                        genre: 'Untitled List',
                        playlistId: customPlaylistId(),
                        films:[]
                    }
                ]
            }
            localStorage.setItem(FLIXLIST, JSON.stringify(listToStore))
            resolve(Object.keys(listToStore).map(channelKey => ({id: channelKey, title: listToStore[channelKey].details.title }) ))
            // resolve(Object.keys(listToStore));
        })
}

export const addNewListToChannelAndSaveToDB = (channel, newListName) => {
    return new Promise((resolve, reject) => {
            let listToStore = JSON.parse(localStorage.getItem(FLIXLIST)) || {}
            let plist = listToStore[channel] && listToStore[channel].playlists ? listToStore[channel].playlists : []
            plist.push({genre: newListName, playlistId: customPlaylistId(), films:[] })
            listToStore[channel].playlists = plist
            console.log("persistence.js: saving", listToStore);
            localStorage.setItem(FLIXLIST, JSON.stringify(listToStore))
            resolve(listToStore[channel]);
            
    })
}

