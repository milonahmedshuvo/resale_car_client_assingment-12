import { handler } from 'daisyui';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';




const Header = () => {
  const {userSignOut, user}=useContext(AuthContext)




const handleSingOut=()=>{
   userSignOut()
   .then(()=>{
    toast.success("SING OUT SUCCESSFUL")
   })
   .catch(()=>{
    toast.error("SING OUT FILED")
   })
}


  const manuBar = <>

    <Link className='font-bold mr-2 text-gray-500' to='/'><li>Home</li></Link>
    <Link to='/blog' className='font-bold mr-2 text-gray-500' > <li>Blog</li> </Link>
   



    {
      user?.uid ? <>
        <Link to='/dashbord' className='font-bold mr-2 text-gray-500' > <li>Dashbord</li> </Link>
        <Link className='font-bold mr-2 text-gray-500' onClick={handleSingOut}><li>SingOut</li></Link>
      </> :
        <>
          <Link className='font-bold mr-2 text-gray-500' to='/login'><li>Login</li></Link>
        </>
    }
  </>






  return (
    <div className="navbar bg-base-100 flex justify-between ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            {manuBar}

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Resale Car</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">

          {manuBar}

        </ul>
      </div>


      
        <label tabIndex={0} htmlFor="dashbord-drawer" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      
    </div>
  );
};

export default Header;