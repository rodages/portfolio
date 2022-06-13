import skills from '../data/skills'
import styles from '../reusableFuncs/styles'

function Technologies({headline, technologiesArr}){
    return (
        <div className='flex flex-col mt-2'>
        <h1 style={styles.headline} className='font-bold text-xl text-center mb-2'>{headline}</h1>
            <div className='flex flex-wrap justify-center'>
                {technologiesArr.map((skill,i)=>{
                    return(
                        <div key={i} style={{width:'100px', minHeight:'100px'}} className='flex flex-col justify-center items-center'>
                            <img style={{height:'60px', width:'auto'}} alt={skill} src={skills[skill]} />
                            <h2 style={styles.subheader}>{skill}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Technologies