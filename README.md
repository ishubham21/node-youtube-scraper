# Disclaimer 

This project is only for learning purposes and that only videos which you've uploaded on your YT channel can be downloaded ethically. Violating this maybe against Youtube guidelines.

# About this project 

Ever found a video on Youtube so binding that you've wanted to download that but knew no way to do so? Or ever wanted to just download an audio file from Youtube?

Well, then this application can be for you.

This is a node application which is built using **ytdl-core** to help the user download the Youtube elements including Video, Audio and Subtitles directly using node CLI into their devices. 

This application contains three files to facilitate the download of audio, video and/or subtitles respectively from Youtube.

With this application, the users get an upper hand in choosing the file name of their choice so to help the users sort files which they've downloaded using this application.

# Running and using

* Clone this repo
  
 ```
 git clone --depth 1 https://github.com/ishubham21/youtube-scrapper.git
 ```

* Make sure you've node installed in your system.
 
 Type in your terminal 
 ```
 node --version
 ```

* Go the root folder of this project i.e. where the *package.json* is present and run the following command in the terminal to install the required modules

```
npm install
```

* Now you're all set to give it a boost.

* To download a video from youtube, type in your terminal

```
node video.js <youtube link to the video> <filename>
```

In the above command, youtube link and filename are both optional and can be left out without invoking any error.


* To download audio from youtube, type in your terminal

```
node audio.js <youtube link to the video> <filename>
```

In the above command, youtube link and filename are both optional and can be left out without invoking any error.

* To download the subtitles from youtube, type in your terminal 

```
node subtitles.js <youtube link to the video>
```

This command will download subtitles in your root directory if present, and will print you a message saying 'Subtitles Missing'.

## Errors/bugs

To report any error/bugs in this project, please create an issue and I'll be more than happy to look into that.