### Introduction

I built a content-based movie recommender system. The system only utilizing the content of movies themselves, which solves the cold-start problem. The challenge is how to extract meaningful information from the movies?

### Movie Trailers

Movie trailers are epitomes of movies. From a movie trailer, audience can have a general idea of the style of the movie. For example, a criminal movie usually have dim colors, while a comedy are full of laughters. How can we quantify them?

### Image Processing

Below is a screenshot of one my favourite movie <em>The Dark Knight</em>'s trailer. As is know to all who familiar with video processing, a video is consist of numerous frames, and each frame is an image. An colorful image is a matrix, each cell of which is a color, representing as RGB.

<img src = "./figures/A-Content-based-Movie-Recommender-System/joker.jpg" with="1200" height="510" alt = "Joker">

If we separate the RGB of a image, a frame with a single dimension of color looks like the following three pictures. Each picture is composed of one kind of color.

<table>
    <tbody>
        <tr>
            <td><img src = "./figures/A-Content-based-Movie-Recommender-System/joker_r.jpg" width="600" height="255" alt = "R"></td>
            <td><img src = "./figures/A-Content-based-Movie-Recommender-System/joker_g.jpg" width="600" height="255" alt = "G"></td>
        </tr>
        <tr>
            <td><img src = "./figures/A-Content-based-Movie-Recommender-System/joker_b.jpg" width="600" height="255" alt = "B"></td>
        </tr>
    </tbody>
</table>

A image can also be quantized in another color space, which is HSV (Hue, Saturation, Value). The HSV color space displays more closely towards what human's vision perceive colors.

<table>
    <tbody>
        <tr>
            <td><img src = "./figures/A-Content-based-Movie-Recommender-System/joker_h.jpg" width="600" height="255" alt = "H"></td>
            <td><img src = "./figures/A-Content-based-Movie-Recommender-System/joker_s.jpg" width="600" height="255" alt = "S"></td>
        </tr>
        <tr>
            <td><img src = "./figures/A-Content-based-Movie-Recommender-System/joker_v.jpg" width="600" height="255" alt = "V"></td>
        </tr>
    </tbody>
</table>

Whichever way we represent it, we can collect statistics from the images. Usually, one second of video is consist of 18 or 24 frames, depending on the fps(frame per second) of the video. Generally, there won't be significant change in frames in a second. Therefore, I sample frames from the videos, one frame for each second.

After collectin the frames, I plotted the color histogram of the frames. In further analysis, I divided the histogram into four bins. The data in color histograms can be used as features for the recommender system.

<img src = "./figures/A-Content-based-Movie-Recommender-System/hsv_histogram.png" width="1200" height="675" alt = "Joker">

### Audio Processing

What about sound? How can we take sound of the trailers into account. Well, according to a blog, I figured out that sound features can be capatured by dividing different amplitude into various levels.

<img src = "./figures/A-Content-based-Movie-Recommender-System/chromatogram.png" alt = "Chromatogram">
            
The audio information of trailers can be used identify the feelings people have when watching them. There must have some difference in the sound between a movie which is filled with gun shootings and one with romantic background music.
            
### Social Network Analysis
            
If two movies have overlapping in crew members, then I defined them have a connection to each other. Let's take two Christopher Nolan's movies as examples.
            
<table class="table">
    <thead>
        <tr>
            <td></td>
            <td>Interstellar (2014)</td>
            <td>The Dark Knight Rises (2012)</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Director: </td>
            <td><font color="red">Christopher Nolan</font></td>
            <td><font color="red">Christopher Nolan</font></td>
        </tr>
        <tr>
            <td>Writers: </td>
            <td><font color="red">Christopher Nolan</td>
            </td> 
            <td> Jonathan Nolan </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td><font color="red">Christopher Nolan</td>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>David S. Goyer</td>
        </tr>
        <tr>
            <td>Stars:</td>
            <td>Leonardo DiCaprio</td>
            <td>Christian Bale</td>
        </tr>
        <tr>
            <td></td>
            <td><font color="orange">Joseph Gordon-Levitt</font></td>
            <td>Gary Oldman</td>
        </tr>
        <tr>
            <td></td>
            <td>Ellen Page</td>
            <td><font color="green">Tom Hardy</font></td>
        </tr>
        <tr>
            <td></td>
            <td><font color="green">Tom Hardy</font></td>
            <td><font color="orange">Joseph Gordon-Levitt</font></td>
        </tr>
        <tr>
            <td></td>
            <td>Ken Watanabe</td>
            <td>Anne Hathaway</td>
        </tr>
        <tr>
            <td></td>
            <td><font color="purple">Marion Cotillard</font></td>
            <td><font color="purple">Marion Cotillard</font></td>
        </tr>
    </tbody>
</table>
<hr>

According to the table, it is obvious that there are some crew members who participated in both the two movies. In this case, I define the two movies have a connection to each other. Otherwise, the two movies do not have a connection. I plotted the network of movies based on the definition using Gephi.

<img src = "./figures/A-Content-based-Movie-Recommender-System/movie_network.png" alt = "Movie Network"> 
