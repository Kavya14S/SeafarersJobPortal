import { Link } from "react-router-dom";
const Nav = () => {
    const handleMenu = () => {
    content.classList.toggle("hidden");
    crossicon.classList.toggle("hidden");
    menuicon.classList.toggle("hidden");
  };
  const handleCross = () => {
    content.classList.toggle("hidden");
    crossicon.classList.toggle("hidden");
    menuicon.classList.toggle("hidden");
  }
    return (
        <>
        <nav className="fixed w-full top-0 left-0 z-50">
        <div className="2xl:container mx-auto py-4 md:py-0  bg-[#001140] h-fit md:h-16 ">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 md:h-16">
                <div className="flex justify-between items-center">
                    <p className="font-[Poppins] py-2 px-4 text-center text-white">MARITIME JOBS</p>

                    <div className="md:hidden">
                        <img src="https://ik.imagekit.io/9rldi0s2f8/brill/burger-bar.png?updatedAt=1749994333152" alt="menu" className="h-5 w-5" id="menuicon" 
                      onClick={handleMenu} />
                        
                        <img src="https://ik.imagekit.io/9rldi0s2f8/brill/close(2).png?updatedAt=1749994332932" alt="cross" className="h-4 w-4 hidden" id="crossicon" 
                      onClick={handleCross} />
    
                    </div>
                </div>
                <div className="hidden md:flex text-white flex-col justify-center items-center md:flex-row md:justify-end gap-4 space-y-2 md:space-y-0 p-2.5 md:p-0" id="content">
                    <Link to="/" onClick={handleCross}>
                    <p className="font-[Poppins] py-2 px-4 text-center">HOME</p>
                    </Link>
                    <Link to="/BrowseJobsPage" onClick={handleCross}>
                    <p className="font-[Poppins] py-2 px-4 text-center">JOBS</p>
                    </Link>
                    <Link to="/RemoteTrainingPage" onClick={handleCross}>
                    <p className="font-[Poppins] py-2 px-4 text-center">TRAINING</p>
                    </Link>
                    <Link to="/ContactPage" onClick={handleCross}>
                    <p className="font-[Poppins] py-2 px-4 text-center">CONTACT</p>
                    </Link>
                    <Link to="/Signin" onClick={handleCross}>
                    <p className="bg-red-500 text-center my-2 rounded-md px-4 py-1 align-middle font-[Poppins]">SIGN IN</p>
                    </Link>

                </div>
            </div>
        </div>
    </nav>
        </>
    )
}
export default Nav;