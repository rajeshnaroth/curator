export const saveFlixToDB = (flixlist) => {
    return new Promise((resolve, reject) => {
            console.log("persistence.js: saving ", flixlist);
                    
            localStorage.setItem('flixlist', JSON.stringify({'default':flixlist}))
            resolve(flixlist);
        })
}

export const getFlixFromDB = () => {
    return new Promise((resolve, reject) => {
            console.log("persistence.js: getting ");
            try {
                let storedList = JSON.parse(localStorage.getItem('flixlist'))
                resolve(storedList)
            } catch (err) {
                resolve([])
            }
        })
}