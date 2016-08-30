export const thunk = ({ dispatch, getState }) => (next) => (action) => {
	if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
}

export const getJson = (input) => {
	return new Promise((resolve, reject) => {
		let serverReq = new XMLHttpRequest();
	
		serverReq.open('GET', input.url);
	    //serverReq.setRequestHeader('Content-Type', 'application/json');
	    serverReq.send()
	    serverReq.onload = () => {
	        if (serverReq.readyState === 4 && serverReq.status >= 200 && serverReq.status < 300) {
	        	resolve(Object.assign({}, input, JSON.parse(serverReq.response)));
	        } else {
	        	reject(serverReq.statusText);
	        }
	    }
    })
}

export const getAllJson = (inputList) => Promise.all(inputList.map(p => getJson(p)))

export const toPromise = (inputFun) => {
        //return Promise.resolve(inputFun.apply(null, arguments))
    return function(singleArg) {
        return new Promise((resolve, reject) => {
            resolve(inputFun(singleArg))
        })
    }
}

export const newId = (prefix) => {
	let key = 1;
	return () => prefix + (key++)
}