import data from '../data/data'
import Image from 'next/image'


function Experience(){
    return(
        <div style={{minHeight:'50vh', border:'1px solid green'}} className='container mx-auto experience'>
            <div className='inner-container'>
                <h1>Experience</h1>
                {data.experience.map((workplace,i)=>{
                    return (
                        <div className='flex'>
                            <div style={{  width: '300px', height: '225px'}} className='relative'>
                                <Image layout={'fill'} objectFit={'contain'} alt={`${workplace.company} logo`}  src={`/${workplace.image}.png`} />
                            </div>
                            <div>
                                <h2>{workplace.company}</h2>
                                <h3>{workplace.title}</h3>
                                <h4>{workplace.year}</h4>
                                <p>{workplace.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Experience