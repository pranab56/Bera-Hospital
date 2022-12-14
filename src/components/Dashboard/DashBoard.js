import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content text-center">
            <h2 className='text-3xl font-bold text-purple-500 mb-3'>Dashboard</h2>
            <hr/><hr /><hr /><hr />
          {/* <!-- Page content here --> */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <Outlet></Outlet>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to={'/dashBoard'}>Sidebar Item 1</Link></li>
            <li><Link to={'myReview'}>Sidebar Item 2</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;