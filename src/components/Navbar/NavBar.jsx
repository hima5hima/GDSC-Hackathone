import Button from "../Button/Button"


const NavBar = () => {
    return <nav className="flex justify-between items-center border-b-2 border-lightBlue py-4 px-8">
      <div className="image-box w-[150PX]">
        <img
          src="/imgs/GDSC logo.png"
          alt="Al-Azhar Google Developer Student Club logo"
        />
      </div>
  
       <div className="hidden md:flex gap-5 border-2 p-2 rounded-xl ">
         <Button fill>Teams</Button>
         <Button className={'border-0 text-textShade'}>Projects</Button>
         <Button className={'border-0 text-textShade'}>About Us</Button>
         <Button className={'border-0 text-textShade'}>Contact Us</Button>
       </div>

       <div className="flex gap-4">
        <Button className={'text-main'}>SignUp</Button>
        <Button fill>Login</Button>
       </div>
    </nav>
}

export default NavBar