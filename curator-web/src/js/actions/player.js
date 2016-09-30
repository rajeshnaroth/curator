export const OPEN_PLAYER = 'OPEN_PLAYER'

export const triggerOpenPlayer = (videoId) => (dispatch) =>  dispatch({type: OPEN_PLAYER, player: { videoId:videoId }})
