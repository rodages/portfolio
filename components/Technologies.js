import skills from '../data/skills'
import styles from '../reusableFuncs/styles'

function Technologies({headline, technologiesArr}){
    return (
        <div className='flex flex-col mt-2'>
        <h1 style={styles.header} className='font-bold text-center mb-1'>{headline}</h1>
            <div className='flex flex-wrap justify-center'>
                {technologiesArr.map((skill,i)=>{
                    return(
                        <div key={i} style={{minWidth:'80px', minHeight:'80px'}} className='flex flex-col justify-center items-center'>
                            <img style={{height:'40px', width:'40px'}} alt={skill} src={skills[skill]} />
                            <h2 style={styles.subheader}>{skill}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Technologies