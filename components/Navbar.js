import { Link, animateScroll as scroll } from 'react-scroll'

const sections = ['About', 'Skills', 'Projects', 'Experience', 'Interests', 'Contact']

function Navbar(){
    return (
        <nav className='nav flex mx-3 justify-between'>
            <div
                className='logo mr-12'
                title="Zan Makarov"
                onClick={()=> scroll.scrollToTop()}
                //image
            >
                ZM
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