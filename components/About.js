import makeHeadlineTag from "../reusableFuncs/makeHeadlineTag"
import data from '../data/data'

function About(){
    return(
        <section id='about' className="container mx-auto">
            {makeHeadlineTag("About Me")}
            <article>
                <h3>Personal Profile</h3>
                <p>
                I am a Junior Full-Stack Software Engineer specialising in Web Development with React, JavaScript, CSS and HTML, confident with Node, relational database - PostgreSQL and NoSQL database – MongoDB.
I have six years of experience in a Management role at Hornblower which allowed me to gain skills in time management, task delegation, coaching and leadership by leading a team of over 20 individuals to exceed the sales budget and achieving the highest Net Promoter Scores for dining from all companies portfolios.
I have recently graduated from Software Engineering Immersive Bootcamp at General Assembly. The course helped me to strengthen previously acquired full-stack skills and apply learned knowledge in a real-life environment at work.

                </p>
            </article>

            <article>
                <h3>Further Learning</h3>
                <div>The learning does not stop after graduating from General Assembly!
                
                I am currently learning more about Data Structures and Algorythms.
                
                In regards to Technologies -  I am interested in learning more about the following:
                
                {data.about.furtherLearning.map((technology,i)=>{
                    return(
                        <div key={i}>
                        <h4>{Object.keys(technology)}</h4>

                        <p>{Object.values(technology)}</p>
                        </div>
                    )
                })}
                </div>
            </article>

            <article>
                <h3>Interests</h3>

                {data.about.interests.map((activity,i)=>{
                    return(
                        <div key={i}>
                        <h4>{Object.keys(activity)}</h4>

                        <p>{Object.values(activity)}</p>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}

export default About