const FLIXLIST = 'flixlist'

const customPlaylistId = () => Math.floor((Math.random() * 1000000) + 100)

export const saveChannelToDB = (channel, curatedList) => {
    return new Promise((resolve, reject) => {
            let listToStore = JSON.parse(localStorage.getItem(FLIXLIST))
            listToStore[channel] = curatedList
            console.log("persistence.js: saving ", channel, listToStore);
                    
            localStorage.setItem(FLIXLIST, JSON.stringify(listToStore))
            resolve(listToStore);
        })
}

export const getChannelFromDB = (channel) => {
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

// returns just an array of channel names
export const getChannelNamesFromDB = () => {
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
            listToStore[channel] = [
                { 
                    genre: 'Untitled List',
                    playlistId: customPlaylistId(),
                    films:[]
                }
            ]
            localStorage.setItem(FLIXLIST, JSON.stringify(listToStore))
            resolve(Object.keys(listToStore));
        })
}

export const addNewListToChannelAndSaveToDB = (channel, newListName) => {
    return new Promise((resolve, reject) => {
            let listToStore = JSON.parse(localStorage.getItem(FLIXLIST)) || {}
            let ch =  listToStore[channel] || []
            ch.push({genre: newListName, playlistId: customPlaylistId(), films:[] })
            listToStore[channel] = ch
            console.log("persistence.js: saving", listToStore);
            localStorage.setItem(FLIXLIST, JSON.stringify(listToStore))
            resolve(listToStore[channel]);
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

