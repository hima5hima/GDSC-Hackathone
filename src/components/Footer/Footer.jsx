const Footer = () => {
    return(
     <footer className="py-6 border-t-4 border-textShade mt-auto">
        <div className="flex justify-between items-center w-11/12 mx-auto flex-col md:flex-row">
           <div className="image-box w-[150PX]">
             <img
              src="/imgs/GDSC logo.png"
              alt="Al-Azhar Google Developer Student Club logo"
              />
            </div>

            <ul className="flex items-center flex-col md:flex-row">   
              <li className="my-3 md:my-0">
                <a className="text-sm cursor-pointer">Footer Link</a>
               </li>
              <li className="my-3 md:my-0">
                <a className="text-sm cursor-pointer">Footer Link</a>
              </li>
              <li className="my-3 md:my-0">
                <a className="text-sm cursor-pointer">Footer Link</a>
              </li>
              <li className="my-3 md:my-0">
                <a className="text-sm cursor-pointer">Footer Link</a>
              </li>
            </ul>
        </div>

        <div className="w-fitcontent border-t-2 border-textShade my-6 w-11/12 mx-auto">
            <p className="text-center text-sm text-textShade mt-2">@2023 Solution Challenge Al-Azhar university. All Rights Reserved</p>
        </div>
        
     </footer>
    ) 
}

export default Footer