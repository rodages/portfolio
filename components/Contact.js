import Fade from 'react-reveal/Fade'

import Image from 'next/image'
import makeHeadlineTag from "../reusableFuncs/makeHeadlineTag"
import styles from '../reusableFuncs/styles'


function Contact(){
    const date = new Date
    return(
        <div id='contact' className='container mx-auto contact mt-12'>
                {makeHeadlineTag("Contact Me")}
            <div className='inner-container flex justify-around mt-8 mb-6 mx-auto'>
                <a
                href="mailto:zanasmakarov@gmail.com"
                subject="I was looking at your Portfolio...">
                <Fade duration={2000} >
                    <div className="email flex items-center" >
                        <Image height='40px' width='40px' alt="Email Me" title="Email Me" src="/mailSVG.svg" />
                        <p style={styles.headline} className="ml-1"> Email</p>
                    </div>
                </Fade>
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/zanmakarov/" rel="noreferrer">
                <Fade duration={2000} delay={300} >
                    <div className="linkdin flex items-center">
                        <img style={{height:'40px', width:'40px'}} alt="LinkedIn" title="LinkedIn" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original.svg" />
                        <p style={styles.headline} className="ml-1"> LinkedIn</p>
                    </div>
                </Fade>
                </a>

                <a target="_blank" href="https://github.com/rodages" rel="noreferrer">
                <Fade duration={2000} delay={600} >
                    <div className="github flex items-center">
                    <img style={{height:'40px', width:'40px'}} alt="GitHub" title="GitHub" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg" />
                    <p style={styles.headline} className="ml-1"> GitHub</p>
                    </div>
                </Fade>
        </a>

            </div>
            <div className="flex justify-center font-bold">
                <p style={styles.headline}> &copy; Zan Makarov {date.getFullYear()}</p>
            </div>
        
        </div>
    )
}

export default Contact