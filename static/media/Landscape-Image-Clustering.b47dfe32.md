My original thought about this project is to cluster the landscape images by their colors. I developed a web crawler to download 8892 landscape photos from <a href="https://wallpaper.mob.org/gallery/tag=landscape/">mob.org</a>.

However, I ran up against difficulty in extracting the color features from the images. I was inspired by an assignment given by Professor Harvey. In the assignment, the material guides us to use the proportional of the channel to classify whether a certain picture depicts summer or winter. From this perspective, I searched some information online and was attracted by the concept of color histogram.

Therefore, I designed my procedure as followings. Interestingly, I found a paper that has a similar approach to mine.<sup>[1]<sup>

The first step is quite obvious, to read the image as a three-dimensional matrix. The first and second dimensions are the count of rows and columns, and the third dimension is the color vector representing RGB, whose length is three. So it is basically an (N, M, 3) matrix.

Let’s take this picture as an example.

<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/sample.jpg" alt = "Sample">

In this picture, the blue, yellow, green and red color seems to be dominant. If we plot the pixels in three-dimensional space, the distribution will look like this.

<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/sample_color_scatter.png" alt = "Sample Color Scatter">

Secondly, I count the frequency of the occurrence of primary colors and use it as the features of the images. Sometimes it is better to view the image in other color spaces, like HSV or HSL, which is more friendly to human’s eyes. In this project, I still choose the RGB color space for simplicity.

Since there are 256 possible values for a one color dimension, I transformed the value by dividing them with 26 so there will be 10 possible values for each color dimension, which will lessen the burden of calculation.

The third step is to apply the K-means algorithm to cluster the images. Here I write a scala script and run it on the spark, which will make four clusters. The color histogram of the cluster centers is shown in the figure.

<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/cluster_centers_hist.png" alt = "Cluster Centers Color Histogram">

The centers look separated from each other, which is indicating a good result to me. Hopefully, the different clusters can be distinguished by human eyes. I collected 400 images of each cluster and display them in the followings.

<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/400images_0.png" alt = "400images_0">
<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/400images_1.png" alt = "400images_1">
<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/400images_2.png" alt = "400images_2">
<img src = "./figures/Landscape-Image-Clustering-Based-On-Color-Histogram/400images_3.png" alt = "400images_3">

They look great, aren’t they? Each cluster appears to have a different color theme.

Reference:

1. Amro, Anas Nassar, Ibrahim Tamimi, Hashem. (2013). Clustering of Digital Images based on Color Histogram.</li>
2. Sharon Lin and Pat Hanrahan. 2013. Modeling how people extract color themes from images. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI ‘13). ACM, New York, NY, USA, 3101-3110.
