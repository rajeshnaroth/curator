export const saveFlixToDB = (channel, curatedList) => {
    return new Promise((resolve, reject) => {
            let listToStore = JSON.parse(localStorage.getItem('flixlist'))
            listToStore[channel] = curatedList
            console.log("persistence.js: saving ", listToStore);
                    
            localStorage.setItem('flixlist', JSON.stringify(listToStore))
            resolve(listToStore);
        })
}

export const getFlixFromDB = (channel) => {
    return new Promise((resolve, reject) => {
            console.log("persistence.js: getting ", channel);
            try {
                let storedList = JSON.parse(localStorage.getItem('flixlist'))
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
                let storedList = JSON.parse(localStorage.getItem('flixlist'))
                resolve(Object.keys(storedList))
            } catch (err) {
                resolve([])
            }
        })
}

export const deleteChannelAndSaveToDB = (channel) => {
    return new Promise((resolve, reject) => {
            let listToStore = JSON.parse(localStorage.getItem('flixlist'))
            // @todo move this logic out later
            if (channel !== 'default') {
                delete listToStore[channel]
            }
            localStorage.setItem('flixlist', JSON.stringify(listToStore))
            resolve(Object.keys(listToStore));
        })
}

