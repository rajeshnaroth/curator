import { curry, compose, composeP } from 'ramda'
import { getJson } from '../utils'
//https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLMoRXD9aFQeoWJ5Ad8ZPeHPP1LEfuqMPl&key=AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM
//channels?part=snippet&forUsername=GoogleDevelopers
// const BASE_API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&key=AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM&maxResults=50'
const BASE_API_URL = 'https://www.googleapis.com/youtube/v3/'
const API_KEY = 'AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM'

const baseApiUrl = (method) => BASE_API_URL + method + '?key=' + API_KEY

//playlistId=PLMoRXD9aFQeoWJ5Ad8ZPeHPP1LEfuqMPl&

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

function toPromise(inputFun) {
        //return Promise.resolve(inputFun.apply(null, arguments))
    return function(singleArg) {
        return new Promise((resolve, reject) => {
            resolve(inputFun(singleArg))
        })
    }
}
function parseChannelIdData(result) {
    console.log("parseChannelIdData.js: ", result);
            
    return new Promise((resolve, reject) => {
        let channelRecord = result.items
            .filter(v => v.kind === 'youtube#channel')
            .map(item => ({
                        channelId: item.id, 
                        title:item.snippet.title, 
                        description:item.snippet.description
            }))
            .shift()
        resolve(Object.assign({}, channelRecord, playListsUrl(channelRecord.channelId)))
    });
}

function parsePlayListsData(result) {
    return new Promise((resolve, reject) => {
        let playlist = result.items
            .filter(v => v.kind === 'youtube#playlist')
            .map(item => ({
                        playlistId: item.id, 
                        title:item.snippet.title, 
                        description:item.snippet.description
            }))
            .shift()
        resolve(Object.assign({}, playlist, playListVideosUrl(playlist.playlistId)))
    });
}

export function parseVideoData(playlistData) {
    var res = [
        {
            genre:playlistData.title,
            films:playlistData.items.map(item => (
                {
                    id: item.snippet.resourceId.videoId, 
                    title:item.snippet.title, 
                    rating:4, 
                    views:2000, 
                    description:item.snippet.description
                }
                ))
        }
    ];
    return res
}

export const fetchChannelIdFromUserId = compose(getJson, channelIdUrl)
export const fetchPlayListsFromChannelId = compose(getJson, playListsUrl)
export const fetchVideosFromPlaylist = compose(getJson, playListVideosUrl)

export const fetchVideosFromUser = composeP(
    getJson, 
    parsePlayListsData, 
    getJson, 
    parseChannelIdData,
    getJson, 
    toPromise(channelIdUrl))

export const getVideos = composeP(parseChannelIdData, fetchChannelIdFromUserId)


//getVideosFromUserId('rnaroth').then(result => console.log('fetchChannelIdFromUserId', result))

