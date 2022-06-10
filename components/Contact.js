import Fade from 'react-reveal/Fade'

import Image from 'next/image'

function Contact(){
    return(
        <div style={{height:'50vh', border:'1px solid red'}} className='container mx-auto contact'>
            <div className='inner-container'>
                <h1>Contact Me</h1>

                <a
                href="mailto:zanasmakarov@gmail.com"
                subject="I was looking at your Portfolio...">
                <Fade duration={2000} >
                    <div className="email flex" >
                        <Image height='40px' width='40px' alt="Email Me" title="Email Me" src="/mailSVG.svg" />
                        <p className="subtitle">Email</p>
                    </div>
                </Fade>
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/zanmakarov/" rel="noreferrer">
                <Fade duration={2000} delay={300} >
                    <div className="linkdin flex">
                        <img style={{height:'40px', width:'40px'}} alt="LinkedIn" title="LinkedIn" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/linkedin/linkedin-original.svg" />
                        <p className="subtitle">linkedIn</p>
                    </div>
                </Fade>
                </a>

                <a target="_blank" href="https://github.com/rodages" rel="noreferrer">
                <Fade duration={2000} delay={600} >
                    <div className="github flex">
                    <img style={{height:'40px', width:'40px'}} alt="GitHub" title="GitHub" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg" />
                    <p className="subtitle">GitHub</p>
                    </div>
                </Fade>
        </a>

            </div>

        </div>
    )
}

export default Contact