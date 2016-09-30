import { compose, composeP } from 'ramda'
import { getJson, toPromise, timeBasedId } from '../utils'
//https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLMoRXD9aFQeoWJ5Ad8ZPeHPP1LEfuqMPl&key=AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM
//channels?part=snippet&forUsername=GoogleDevelopers// const BASE_API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&key=AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM&maxResults=50'
const BASE_API_ENDPOINT = 'https://www.googleapis.com/youtube/v3/'
const API_KEY = 'AIzaSyDGS3stBRnJAOZkTCQq-iE59JesxwwMjaM'

const baseApiUrl = (resourceName) => BASE_API_ENDPOINT + resourceName + '?key=' + API_KEY
const fakePlaylistId = timeBasedId('pl-')

//playlistId=PLMoRXD9aFQeoWJ5Ad8ZPeHPP1LEfuqMPl&

// Url construction
// Pair results with parseChannelIdDataToUrl()
const playlistsByUserIdUrl = (userId) => ({
    input:userId,
    url: [
        baseApiUrl('channels'), 
        'forUsername=' + userId, 
        'part=snippet'
    ].join('&')}
)

// Pair results with parsePlayListsDataToUrls()
const playListsByChannelIdUrl = (channelId) => ({
    input:channelId,
    url: [
        baseApiUrl('playlists'), 
        'channelId=' + channelId, 
        'part=snippet',
        'maxResults=50'
    ].join('&')}
)

//Pair results with parsePlaylistData
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
const parseChannelIdDataToUrl = (result) => new Promise((resolve, reject) => {
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
})

const parsePlayListsDataToUrls = (result) => new Promise((resolve, reject) => {
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
    let newPlist = playlists.map(
            pl => Object.assign({}, pl, playListVideosUrl(pl.playlistId))
        )
            
    resolve(newPlist)
})

const parsePlaylistData = (playlistData) => new Promise((resolve, reject) => {
    let res = playlistData.map(pl => (
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
    resolve(res)
})

const parseVideoDetailsToFakePlaylist = (videoData) => new Promise((resolve, reject) => {
    console.log(videoData)
    let res = [{
        genre: 'New List',
        playlistId: fakePlaylistId(),
        films: videoData.items.map(item => (
            {
                id: item.id, 
                title: item.snippet.title, 
                rating: 4, 
                views: 2000, 
                description: item.snippet.description
            }
        ))
    }]
    resolve(res)
})

function parseVideoDetails(videoData) {
    let res = videoData.items.map(item => (
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

const getJsonForAllPlaylists = (playlists) => Promise.all(playlists.map(pl => getJson(pl)))

export const fetchPlaylistFromChannelByNameOrId = composeP(
    parsePlaylistData,
    getJsonForAllPlaylists, 
    parsePlayListsDataToUrls, 
    getJson, 
    parseChannelIdDataToUrl,
    getJson, 
    toPromise(playlistsByUserIdUrl))

export const fetchSingleVideoAsFakePlaylist = composeP(
    parseVideoDetailsToFakePlaylist,
    getJson,
    toPromise(videoUrl))

export const fetchVideoDetails = composeP(
    parseVideoDetails,
    getJson,
    toPromise(videoUrl))


// export const fetchChannelIdFromUserId    = compose(getJson, playlistsByUserIdUrl)
// export const fetchPlayListsFromChannelId = compose(getJson, playListsByChannelIdUrl)
// export const fetchVideosFromPlaylist     = compose(getJson, playListVideosUrl)
//export const getVideos = composeP(parseChannelIdDataToUrl, fetchChannelIdFromUserId)
