const youtubedl = require('youtube-dl')

//if custom url isn't found default file would be downloaded
const url = process.argv[2] || 'https://youtu.be/PizwcirYuGY'

const options = {
    // Write automatic subtitle file (youtube only)
    auto: false,
    // Downloads all the available subtitles.
    all: false,
    // Subtitle format. YouTube generated subtitles
    // are available ttml or vtt.
    format: 'ttml',
    // Languages of subtitles to download, separated by commas.
    lang: 'en',
    // The directory to save the downloaded files in.
    cwd: __dirname,
}

youtubedl.getSubs(url, options, function (err, files) {
    if (err) throw err

    //checking if the array is empty or not
    if (files.length !== 0) {
        console.log('subtitle files downloaded, check your root folder')
    }
    else{
        console.log('Subtitles not found');
    }
})