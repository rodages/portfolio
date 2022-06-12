import data from '../data/data'
import skills from '../data/skills'
import Fade from 'react-reveal/Fade'
import Technologies from './Technologies'
import makeHeadlineTag from "../reusableFuncs/makeHeadlineTag"

function Skills(){
    return(
        <div id='skills' className='container mx-auto skills-container'>
            {makeHeadlineTag("Skills")}
            <Fade duration={2000}>
                <Technologies headline={'Frontend'} technologiesArr={data.skills.frontend}/>
            </Fade>

            <Fade duration={2000} delay={300} >
                <Technologies headline={'Backend'} technologiesArr={data.skills.backend}/>
            </Fade>

            <Fade duration={2000} delay={600} >
                <Technologies headline={'Tools'} technologiesArr={data.skills.tools}/>
            </Fade>
        </div>
    )
}

export default Skills