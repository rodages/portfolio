import Navbar from './Navbar'
import Contact from './Contact'
import skills from '../data/skills'

function Layout({children}){
    return (
        <>  
            <Navbar style={{postition:'absolute'}}/>
            {/* <img style ={{height:'30px'}} src={`${skills.React}`}/> */}
            <div className='mt-5'>{children}</div>
            {Array(500).fill('hi').map(item=><h1>Item</h1>)}
            <Contact />
        </>
    )
}

export default Layout