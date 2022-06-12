import makeHeadlineTag from "../reusableFuncs/makeHeadlineTag"
import data from '../data/data'
import styles from '../reusableFuncs/styles'

const header='text-center font-bold text-xl'
const subheader='text-center font-bold'
const paragraph = ''


function About(){
    return(
        <section id='about' className="container mx-auto text-center mt-6">
            {makeHeadlineTag("About Me")}
            <article className="mt-4">
                <h3 style={styles.headline} className={`${header} mb-1`} >Personal Profile</h3>
                <p style={styles.subheader}>
                I am a Junior Full-Stack Software Engineer specialising in Web Development with React, JavaScript, CSS and HTML, confident with Node, relational database - PostgreSQL and NoSQL database – MongoDB.
                </p>
                <p style={styles.subheader}>
I have six years of experience in a Management role at Hornblower which allowed me to gain skills in time management, task delegation, coaching and leadership by leading a team of over 20 individuals to exceed the sales budget and achieving the highest Net Promoter Scores for dining from all companies portfolios.
                </p>
                <p style={styles.subheader}>

Recently I have graduated from Software Engineering Immersive Bootcamp at General Assembly. The course helped me to strengthen previously acquired full-stack skills and apply learned knowledge in a real-life environment at work.

                </p>
            </article>
            <div className="md:flex">

                <article>
                    <h3 style={styles.headline} className={`${header} mt-4 mb-2`}>Further Learning</h3>
                    <div>
                    <div style={styles.subheader}>
                        <p>The learning does not stop after graduating from General Assembly!

                        I am currently learning more about Data Structures and Algorythms.

                        In regards to Technologies -  I am interested in learning more about the following:
                        </p>
                    </div>
                    {data.about.furtherLearning.map((technology,i)=>{
                        return(
                            <div key={i} className='mt-2'>
                            <h4 style={styles.header} className={subheader}>{Object.keys(technology)}</h4>

                            <p style={styles.subheader} className='mt-1'>{Object.values(technology)}</p>
                            </div>
                        )
                    })}
                    </div>
                </article>

                <article>
                    <h3 style={styles.headline} className={`${header} mt-4 mb-2`}>Interests</h3>

                    {data.about.interests.map((activity,i)=>{
                        return(
                            <div key={i} className='mt-2'>
                            <h4 style={styles.header} className={subheader}>{Object.keys(activity)}</h4>

                            <p style={styles.subheader}>{Object.values(activity)}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
        </section>
    )
}

export default About