import { curry, compose, composeP } from 'ramda'
import { getJson, toPromise } from '../utils'
//https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLMoRXD9aFQeoWJ5Ad8ZPeHPP1LEfuqMPl&key=AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM
//channels?part=snippet&forUsername=GoogleDevelopers// const BASE_API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&key=AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM&maxResults=50'
const BASE_API_ENDPOINT = 'https://www.googleapis.com/youtube/v3/'
const API_KEY = 'AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM'

const baseApiUrl = (resourceName) => BASE_API_ENDPOINT + resourceName + '?key=' + API_KEY

//playlistId=PLMoRXD9aFQeoWJ5Ad8ZPeHPP1LEfuqMPl&

// Url construction
const channelIdUrl = (userId) => ({url: [
    baseApiUrl('channels'), 
    'forUsername=' + userId, 
    'part=snippet'
].join('&')})

const playListsUrl = (channelId) => ({url: [
    baseApiUrl('playlists'), 
    'channelId=' + channelId, 
    'part=snippet',
    'maxResults=50'
].join('&')})

const playListVideosUrl = (playlistId) => ({url: [
    baseApiUrl('playlistItems'), 
    'playlistId=' + playlistId, 
    'part=contentDetails,snippet', 
    'maxResults=50'
].join('&')})

// Parse functions. Takes in results and spits out a Promise
function parseChannelIdData(result) {            
    return new Promise((resolve, reject) => {
        let channelRecord = result.items
            .filter(v => v.kind === 'youtube#channel')
            .map(item => ({
                        channelId: item.id, 
                        title: item.snippet.title, 
                        description: item.snippet.description
            }))
            .shift()
        resolve(Object.assign({}, channelRecord, playListsUrl(channelRecord.channelId)))
    });
}

function parsePlayListsData(result) {
    return new Promise((resolve, reject) => {
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

function getJsonForAllPlaylists(playlists) {
    return Promise.all(playlists.map(pl => getJson(pl)))
}

export const fetchChannelIdFromUserId = compose(getJson, channelIdUrl)
export const fetchPlayListsFromChannelId = compose(getJson, playListsUrl)
export const fetchVideosFromPlaylist = compose(getJson, playListVideosUrl)

export const fetchVideosFromUser = composeP(
    getJsonForAllPlaylists, 
    parsePlayListsData, 
    getJson, 
    parseChannelIdData,
    getJson, 
    toPromise(channelIdUrl))

export const getVideos = composeP(parseChannelIdData, fetchChannelIdFromUserId)


//fetchVideosFromUser('rnaroth').then(result => console.log('fetchVideosFromUser', result))

