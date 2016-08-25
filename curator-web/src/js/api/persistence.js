export const saveFlixToDB = (flixlist) => {
    return new Promise((resolve, reject) => {
            console.log("persistence.js: saving ", flixlist);
                    
            localStorage.setItem('flixlist', JSON.stringify(flixlist))
            resolve(flixlist);
        })
}

export const getFlixFromDB = () => {
    return new Promise((resolve, reject) => {
            console.log("persistence.js: getting ");
            try {
                resolve(JSON.parse(localStorage.getItem('flixlist')))
            } catch (err) {
                resolve([])
            }
        })
}