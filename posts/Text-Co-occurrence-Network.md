I am a fan of <em>The Hunger Games</em>, and I have read all the three books. The story of The Hunger Games is narrated by the young girl, Katniss Everdeen. There are many characters in the story, and what I am going to do is to describe the connections between the characters from a data science perspective.

The data is the text of the <em>The Hunger Games I</em>, which is the first edition. My steps are listed as followings.

### Preprocessing

I use the nltk package, which is a natural language toolkit, to split the text into a token sequence. Then, I count the occurrence of the main characters.

<img src = "./figures/Text-Co-Occurrence-For-Hunger-Games/characters_occurrence.png" alt = "Characters Occurrence">

The bar chart illustrates that Peeta is the most frequently mentioned person in the story. Haymitch, of course, as the mentor of Katniss and Peeta, is the second most mentioned person. Gale, who I thought would be the best candidate for the male lead when I read the first part of the book, actually plays a relatively minor role in the whole story.

### Word Cloud

The fact that Peeta is the most frequently mentioned person can also be verified through the graph of a word cloud. It is evident that the word “Peeta” has a significant amount of occurrence in the book.

<img src = "./figures/Text-Co-Occurrence-For-Hunger-Games/word_cloud.png" alt = "Word Cloud">

### Text Co-occurrence Network

To describe the relationship between characters, I defined a text co-occurrence network. The definition is that if one name appears in the range of 100 words of another name, then the connections between the two names will increase one. For example, if we got Peeta in the token sequence, and Haymitch appears after 80 words, then the count of connection between Peeta and Haymitch will add one. Therefore, what we have here is a weighted undirected network.

I use software Gephi to visualize the network. This software is fantastic, by the way.

<img src = "./figures/Text-Co-Occurrence-For-Hunger-Games/network_graph.png" alt = "Network Graph">

It seems that there exists some redundancy in the network. Therefore, I removed all the edges whose count of co-occurrence is less than or equals three.

<img src = "./figures/Text-Co-Occurrence-For-Hunger-Games/network_graph_greater_than_three.png" alt = "Network Graph">

This graph looks much better! The chart provides some interesting data regarding the relationship between the main characters. Those who have close relationship indeed have more frequent co-occurrence in the story. The people that do not show up together with others look more alienated in the network. That is consistent with our common sense. Why Peeta would spend his weekend with President Snow rather than Katniss or Haymitch?
