import { compose, composeP } from 'ramda'
import { getJson, toPromise } from '../utils'
//https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLMoRXD9aFQeoWJ5Ad8ZPeHPP1LEfuqMPl&key=AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM
//channels?part=snippet&forUsername=GoogleDevelopers// const BASE_API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&key=AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM&maxResults=50'
const BASE_API_ENDPOINT = 'https://www.googleapis.com/youtube/v3/'
const API_KEY = 'AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM'

const baseApiUrl = (resourceName) => BASE_API_ENDPOINT + resourceName + '?key=' + API_KEY

//playlistId=PLMoRXD9aFQeoWJ5Ad8ZPeHPP1LEfuqMPl&

// Url construction
// Pair results with parseChannelIdData()
const playlistsByUserIdUrl = (userId) => ({
    input:userId,
    url: [
        baseApiUrl('channels'), 
        'forUsername=' + userId, 
        'part=snippet'
    ].join('&')}
)

// Pair results with parsePlayListsData()
const playListsByChannelIdUrl = (channelId) => ({
    input:channelId,
    url: [
        baseApiUrl('playlists'), 
        'channelId=' + channelId, 
        'part=snippet',
        'maxResults=50'
    ].join('&')}
)

//Pair results with parseVideoData
const playListVideosUrl = (playlistId) => ({
    input:playlistId,
    url: [
        baseApiUrl('playlistItems'), 
        'playlistId=' + playlistId, 
        'part=contentDetails,snippet', 
        'maxResults=50'
    ].join('&')}
)

const videoUrl = (videoId) => ({
    input:videoId,
    url: [
        baseApiUrl('videos'), 
        'id=' + videoId, 
        'part=contentDetails,snippet'
    ].join('&')}
)

// Parse functions. Takes in results and spits out a Promise
function parseChannelIdData(result) {            
    return new Promise((resolve, reject) => {
        if (!result.items) {
            reject('No such channel')
        }
        let channelRecord = result.items
            .filter(v => v.kind === 'youtube#channel')
            .map(item => ({
                        channelId: item.id, 
                        title: item.snippet.title, 
                        description: item.snippet.description
            }))
            .shift()

        if (!channelRecord || !channelRecord.channelId) {
            // no channel id. So try with the user id
            resolve(Object.assign({}, channelRecord, playListsByChannelIdUrl(result.input)))
        } else {
            resolve(Object.assign({}, channelRecord, playListsByChannelIdUrl(channelRecord.channelId)))
        }
    });
}

function parsePlayListsData(result) {
    return new Promise((resolve, reject) => {
        if (!result.items || result.items.length === 0) {
            reject('No playlists found')
        }
        let playlists = result.items
            .filter(v => v.kind === 'youtube#playlist')
            .map(item => ({
                        playlistId: item.id, 
                        title: item.snippet.title, 
                        description: item.snippet.description
            }))
            //.shift()
        console.log("parsePlayListsData: ", playlists);
        let newPlist = playlists.map(
                pl => Object.assign({}, pl, playListVideosUrl(pl.playlistId))
            )
        console.log("parsePlayListsData: ", newPlist);
                
        resolve(newPlist)
    });
}

export function parseVideoData(playlistData) {
    console.log('parseVideoData', playlistData)

    var res = playlistData.map(pl => (
        {
            genre: pl.title,
            playlistId: pl.playlistId,
            films: pl.items
                .filter(item => item.snippet.title !== 'Private video')
                .map(item => (
                    {
                        id: item.snippet.resourceId.videoId, 
                        title: item.snippet.title, 
                        rating: 4, 
                        views: 2000, 
                        description: item.snippet.description
                    }
                ))
        })
    )
    return res
}

function parseVideoDetails(videoData) {
    console.log('parseVideoDetails', videoData)

    var res = videoData.items.map(item => (
                {
                    id: item.id, 
                    title: item.snippet.title, 
                    rating: 4, 
                    views: 2000, 
                    description: item.snippet.description
                }
            ))
    return res[0]
}

function getJsonForAllPlaylists(playlists) {
    return Promise.all(playlists.map(pl => getJson(pl)))
}

export const fetchPlaylistFromUser = composeP(
    getJsonForAllPlaylists, 
    parsePlayListsData, 
    getJson, 
    parseChannelIdData,
    getJson, 
    toPromise(playlistsByUserIdUrl))

export const fetchVideoDetails = composeP(
    parseVideoDetails,
    getJson,
    toPromise(videoUrl))


// export const fetchChannelIdFromUserId    = compose(getJson, playlistsByUserIdUrl)
// export const fetchPlayListsFromChannelId = compose(getJson, playListsByChannelIdUrl)
// export const fetchVideosFromPlaylist     = compose(getJson, playListVideosUrl)


//export const getVideos = composeP(parseChannelIdData, fetchChannelIdFromUserId)
