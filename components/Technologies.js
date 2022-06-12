import skills from '../data/skills'

function Technologies({headline, technologiesArr}){
    return (
        <div className='flex'>
                    <h1>{headline}</h1>
                    {technologiesArr.map((skill,i)=>{
                        return(
                            <div style={{border: '1px solid black'}}>
                                <img style={{height:'40px', width:'40px'}} alt={skill} src={skills[skill]} />
                                <h2>{skill}</h2>
                            </div>
                        )
                    })}
                </div>
    )
}

export default Technologies