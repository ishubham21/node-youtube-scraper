const fs = require('fs')
const youtubedl = require('youtube-dl')

//if link isn't provided download the default video
var link = process.argv[2] || 'https://www.youtube.com/watch?v=AZCzfLMHUQs'

//give custom name or the video'll be labelled as 'youtube_video.mp4'
var fileName = process.argv[3] || 'youtube_video'

const video = youtubedl(`${link}`,
    ['--format=18'],
    //setting up a proxy
    ['--proxy', 'http://ip:port'],
    { cwd: __dirname })

// Will be called when the download starts.
video.on('info', info => {
    downloadVideo(fileName)
    console.log(`Title: ${info.title}`);
    console.log('Download started')
    console.log('size: ' + `${info.size/(1000 * 1000)} MB`)
})

async function downloadVideo(fileName) {
    await video.pipe(fs.createWriteStream(`${fileName}.mp4`))
    console.log('Download completed');
}