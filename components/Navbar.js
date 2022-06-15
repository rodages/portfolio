import { Link, animateScroll as scroll } from 'react-scroll'

const sections = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

function Navbar(){
    return (
        <nav style={{backgroundColor:'#1a405f', color:'#fcfcfa', height:'40px'}} className='nav w-screen flex pl-2 md:justify-between sticky top-0 z-50 md:text-lg items-center'>
            <div
                className='logo hover:cursor-pointer hover:text-lightBlue mr-2'
                title="Zan Makarov"
                onClick={()=> scroll.scrollToTop()}
            >
                &lt;ZM/&gt;
            </div>
            <div
                className='nav-sections flex-1 flex justify-around' >
                {sections.map((section,i)=>{
                    const sectionNameLowercased = section.toLowerCase()
                    return <div key={i}>
                        <Link 
                            className={`links hover:cursor-pointer hover:text-lightBlue ${sectionNameLowercased}`}
                            activeClass={`${sectionNameLowercased}-active active`}
                            to={`${sectionNameLowercased}`}
                            spy={true}
                            smooth={true}
                            duration={800}
                            >
                            {section}
                        </Link>
                    </div>
                })}
            </div>
        </nav>
        )
}

export default Navbar