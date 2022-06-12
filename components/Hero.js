import Fade from 'react-reveal/Fade'
import Image from 'next/image'
import profile from '../public/profile.png'

function Hero(){
    return(
        <div id='hero' className='container mx-auto h-screen hero-container flex flex-col justify-center'>
            <Fade duration={2000} delay={100}>
                <div  className='flex justify-center relative mb-8' style={{  minWidth:'50px',  minHeight:'700px', }}>
                    <Image  className='rounded-full ' layout={'fill'} objectFit={'contain'} alt="profile picture"  src={`/profile.png`} />
                </div>
            </Fade>
            <Fade duration={2000} delay={500}>
                <div className='flex flex-col text-center font-bold sm:text-xl  md:text-3xl lg:text-5xl'>
                    <h1 className='mb-4'>Zan Makarov</h1>
                    <h1>Junior Full-Stack Software Engineer</h1>
                </div>
                
            </Fade>
        </div>
    )
}

export default Hero