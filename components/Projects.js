import data from '../data/data'
import skills from '../data/skills'
import Image from 'next/image'

import Technologies from './Technologies'
import makeHeadlineTag from "../reusableFuncs/makeHeadlineTag"

function Projects(){

    return(
        <div id='projects' className='container mx-auto projects'>
            <div className='inner-container'>
            {makeHeadlineTag("Projects")}
                {data.projects.map((project,i)=>{
                    return (
                        <div className='flex flex-col items-center' key={i}>
                            <h2 className='text-2xl font-bold mt-6  '>{project.name}</h2>
                            <h3 className='font-bold mt-2 -mb-12'>{project.setup} Project | {project.timeframe}</h3>
                            <div style={{ width: '100%', height: '600px'}} className='relative h-200 md:h-600'>
                                <Image layout={'fill'} objectFit={'contain'} alt={`${project.key}`}  src={`/${project.key}.png`} />
                            </div>
                            <p className='-mt-16'>{project.description}</p>
                                <Technologies headline={'Technologies used'} technologiesArr={project.technologies}/>
                                <div className='flex '>
                                    <a 
                                    a target="_blank" href={`${project.github}`} rel="noreferrer"
                                    className="mr-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        Github Repo
                                    </a>

                                    <a 
                                    a target="_blank" href={`${project.deployedLink}`} rel="noreferrer"
                                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        View Online
                                    </a>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Projects

 {/* <div className='flex'>
                            <div style={{  width: '300px', height: '225px'}} className='relative'>
                                <Image layout={'fill'} objectFit={'contain'} alt={`${workplace.company} logo`}  src={`/${workplace.image}.png`} />
                            </div>
                            <div>
                                <h2>{workplace.company}</h2>
                                <h3>{workplace.title}</h3>
                                <h4>{workplace.year}</h4>
                                <p>{workplace.description}</p>
                            </div>
                        </div> */}