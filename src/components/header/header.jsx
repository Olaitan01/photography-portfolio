import logo from '/src/assets/Logo.png'
import openIcon from '/src/assets/openMenu.png'
function Header(){
    return(
        <div >
            <div className="headerTop text-headerGrey   border-0 border-b-2 border-lightDark outline-none ">
               <div className='flex justify-between items-center border-l-2 border-r-2 border-lightDark border-0 mx-6  pl-8 pt-14 '>
               <div className='pb-2'>
                    <img src={logo} alt="Damien logo" className='w-[100%] object-fit'/>
                </div>
                <div className="hidden lg:block">
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Portfolio</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className='border-l-2 border-t-2  border-lightDark p-4 rounded-tl-[1rem]'>
                    <button className='hidden lg:block '>Contact Me</button>
                    <button>
                        <img src={openIcon} alt="open and close icons" />
                    </button>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Header