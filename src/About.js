import React from 'react'
import NavBar from './NavBar.js'

class About extends React.Component {
    render() {
        return (
            <div>
                <NavBar currentPage="About"/>
                <h3>Welcome to my website!</h3>
                <br/>
                <p>I am Yanjie He, a Data Scientist who is interested in computer science, statistics, and economics.
                    Currently, I am studying at the Data Analytics program at the George Washington University.</p>

                <p>I have experience in both academic and industry. My first internship is in Kantar Media CIC, which is
                    a
                    company focusing on social media data analysis. That experience was super fun. I developed a text
                    mining
                    system with team members and designed a sentimental analysis solution. Also, I provided a data
                    visualization solution, which is to plot a Venn graph automatically based on given data.</p>

                <p>After I came to the United States, I got an on-campus job in the George Washington University. I am
                    working as a computational social scientist, and what I do in every week is to help Professor
                    Pamphile
                    with her research work. It is an excellent opportunity for me to apply my analytical skills to solve
                    academic problems.</p>

                <p>I am a team member in Professor Benjamin Harvey's A.I. project. I am developing a recommender system
                    with the joint effort of team members. From this experience, I learned the process of system
                    development. There are still a lot learn, and it will be inspiring to me.</p>
            </div>
        );
    }
}

export default About