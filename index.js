const fs = require('fs')
const youtubedl = require('youtube-dl')

var form = document.querySelector('form')
var video
form.addEventListener('submit', () =>{
    var link = document.querySelector('input').value
    video = youtubedl(link)
})

// Will be called when the download starts.
video.on('info', function (info) {
    console.log('Download started')
    console.log('filename: ' + info._filename)
    console.log('size: ' + info.size)
})

video.pipe(fs.createWriteStream('myvideo.mp4'))




















































