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
	    serverReq.setRequestHeader('Content-Type', 'application/json');
	    serverReq.send()
	    serverReq.onload = () => {
	        if (serverReq.readyState === 4 && serverReq.status >= 200 && serverReq.status < 300) {
	        	resolve(Object.assign({}, input, JSON.parse(serverReq.response)));
	        } else {
	        	reject(serverReq.statusText);
	        }
	    }
    });
}