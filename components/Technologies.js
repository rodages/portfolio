import skills from '../data/skills'

function Technologies({headline, technologiesArr}){
    return (
        <div className='flex flex-col'>
        <h1 className='font-bold text-center'>{headline}</h1>
            <div className='flex flex-wrap justify-center'>
                {technologiesArr.map((skill,i)=>{
                    return(
                        <div style={{minWidth:'80px', minHeight:'80px'}} className='flex flex-col justify-center items-center'>
                            <img style={{height:'40px', width:'40px'}} alt={skill} src={skills[skill]} />
                            <h2>{skill}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Technologies