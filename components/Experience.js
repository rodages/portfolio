import data from '../data/data'
import Image from 'next/image'
import makeHeadlineTag from "../reusableFuncs/makeHeadlineTag"

function Experience(){
    return(
        <div id="experience" className='container mx-auto experience mt-16'>
            <div className='inner-container flex flex-col justify-center mt-4'>
                {makeHeadlineTag("Experience")}
                {data.experience.map((workplace,i)=>{
                    return (
                        <div key={i} className='md:flex  flex-col justify-center items-center mt-6'>
                            <div style={{  width: '250px', height: '100px'}} className='relative grow mt-4'>
                                <Image layout={'fill'} objectFit={'contain'} alt={`${workplace.company} logo`}  src={`/${workplace.image}.png`} />
                            </div>

                            <div className='flex flex-col text-center md:w-4/5'>
                                
                                <h2 className='text-center text-2xl font-bold'>{workplace.company}</h2>
                                <h3 className='font-bold text-xl'>{workplace.title}</h3>
                                <h4 className='font-bold'>{workplace.year}</h4>
                                <p className='text-center mt-3'>{workplace.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Experience