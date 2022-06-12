import { Link, animateScroll as scroll } from 'react-scroll'

const sections = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

function Navbar(){
    return (
        <nav style={{backgroundColor:'#1a405f', color:'#fcfcfa'}} className='nav w-screen flex pl-3 pr-10 md:justify-between sticky top-0 z-50'>
            <div
                className='logo mr-12'
                title="Zan Makarov"
                onClick={()=> scroll.scrollToTop()}
            >
                <p>ZM</p>
            </div>
            <div
                className='nav-sections flex-1 flex justify-between' >
                {sections.map((section,i)=>{
                    const sectionNameLowercased = section.toLowerCase()
                    return <div key={i}>
                        <Link 
                            className={`links ${sectionNameLowercased}`}
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