# YoutubeDislikeReturner
A plugin which adds back YouTube dislikes

## Basic info
When Youtube announced they were removing dislikes, I immediately combed through the code, trying to find some way to preserve them. Obviously there's things like the Youtube API, however I doubt that it will keep returning dislikes for much longer. Instead, I found a very crucial variable in the source code, and that is the average rating of a video. Since we still know the amount of likes, we can plug it into an equation and calculate the dislikes. I go over this in detail in the video.
