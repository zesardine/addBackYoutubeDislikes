# YoutubeDislikeReturner
A plugin which adds back YouTube dislikes

## Basic info
When Youtube announced they were removing dislikes, I immediately combed through the code, trying to find some way to preserve them. Obviously there's things like the Youtube API, however I doubt that it will keep returning dislikes for much longer. Instead, I found a very crucial variable in the source code, and that is the average rating of a video. Since we still know the amount of likes, we can plug it into an equation and calculate the dislikes. I go over this in detail in the video.

## How to download
Click on _Code -> Download Zip_. Go to Chrome, click on the three dots in the top right corner, select _More Tools -> Extensions_. On the left side of your screen, click on _Load Unpacked_. Now open the unzipped folder and make sure to select the folder inside of it. I.e. the unzipped folder will be called _addBackYoutubeDislikes-main_, but within it there will be another _addBackYoutubeDislikes-main_, that is the one you must select. After that, it should all work. 

*Note: You will have to refresh all your YouTube pages with Ctrl+F5 to make them update.*

## Current notes for why it may not be working for you:

1. You have to refresh every YouTube page using Ctrl+F5 for it to actually activate, just pressing F5 or opening a YouTube video in an opened tab won't work.
2. If you can't find the 'load unpacked' button in extensions, you have to activate developer mode using the toggle button.
3. If you get a message saying something along the lines of 'manifest not found' after you select the folder, you're selecting the wrong folder. You have to open the unpacked zip and select the folder inside it (has the same name, is just one step down).
4. YouTube is doing weird stuff on their end and the changes haven't gotten to me yet ¯\_(ツ)_/¯

Also, if you're using light mode, the bar will look weird, cause I made it in dark mode, will fix that soon.
