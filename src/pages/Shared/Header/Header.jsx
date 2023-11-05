import React from 'react';

const Header = () => {

    const navOptions = <>
        <li><a>Home</a></li>
        <li><a>Courses</a></li>
        <li><a>Dashboard</a></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      {/* menu items for small devices */}
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Let's learn</a>
  </div>
  <div className="navbar-center hidden lg:flex">
     {/* menu items for large devices */}
    <ul className="menu menu-horizontal px-1">
      
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a href='/login' className="btn me-2">Login</a> 
    <a href='/register' className="btn">Register</a>
  </div>
</div>
        </div>
    );
};

export default Header;