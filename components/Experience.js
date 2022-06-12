import data from '../data/data'
import Image from 'next/image'
import makeHeadlineTag from "../reusableFuncs/makeHeadlineTag"
import Fade from 'react-reveal/Fade'
import styles from '../reusableFuncs/styles'

function Experience(){
    return(
        <div id="experience" className='container mx-auto experience mt-16 pt-10'>
            <div className='inner-container flex flex-col justify-center mt-4'>
                {makeHeadlineTag("Experience")}
                {data.experience.map((workplace,i)=>{
                    return (
                        <Fade duration={2000} >
                            <div key={i} className='flex  flex-col justify-center items-center mt-6'>
                                <div style={{  width: '250px', height: '100px'}} className='relative mt-4'>
                                    <Image layout={'fill'} objectFit={'contain'} alt={`${workplace.company} logo`}  src={`/${workplace.image}.png`} />
                                </div>

                                <div className='flex flex-col text-center md:w-4/5'>
                                    
                                    <h2 style={styles.headline} className='text-center text-2xl font-bold'>{workplace.company}</h2>
                                    <h3 style={styles.headline} className='font-bold text-xl'>{workplace.title}</h3>
                                    <h4 style={styles.headline} className='font-bold'>{workplace.year}</h4>
                                    <p style={styles.subheader} className='text-center mt-3'>{workplace.description}</p>
                                </div>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
    )

}

export default Experience