import data from '../data/data'
import skills from '../data/skills'
import Image from 'next/image'

function Projects(){

    return(
        <div style={{minHeight:'50vh', border:'1px solid yellow'}} className='container mx-auto projects'>
            <div className='inner-container'>
                <h1>Projects</h1>
                {data.projects.map((project,i)=>{
                    console.log(project)
                    return (
                        <div>
                            <div style={{  width: '900px', height: '900px'}} className='relative'>
                                <Image layout={'fill'} objectFit={'contain'} alt={`${project.key}`}  src={`/${project.key}.png`} />
                            </div>
                            <h2>{project.name}</h2>
                            <h3>{project.setup} Project | {project.timeframe}</h3>
                            <p>{project.description}</p>
                            <div className='flex'>
                                {project.technologies.map((technology,i)=>{
                                    return <h4 key={i}>{
                                        <img style={{height:'40px', width:'40px'}} alt={technology} src={skills[technology]} />
                                        }</h4>
                                })}
                            </div>

                            <h5>github:{project.github} | link to project:{project.deployedLink}</h5>
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