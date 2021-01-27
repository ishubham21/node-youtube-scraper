const fs = require('fs')
const youtubedl = require('youtube-dl')

var link = process.argv[2] || 'https://www.youtube.com/watch?v=AZCzfLMHUQs'

//give custom name or the video'll be labelled as 'youtube_video.mp4'
var title = process.argv[3] || 'youtube_audio'

const video = youtubedl(`${link}`,
    ['--format=18'],
    //setting up a proxy
    ['--proxy', 'http://ip:port'],
    { cwd: __dirname })

// Will be called when the download starts.
video.on('info', info => {
    downloadVideo(title)
    console.log('Download started')
    console.log('size: ' + `${info.size / 1000} KB`)
})

async function downloadVideo(title) {
    await video.pipe(fs.createWriteStream(`${title}.mp3`))
    console.log('Download completed');
}