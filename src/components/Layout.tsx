import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const Layout = () => {
		return <div>
				<ul>
						<li>
								<Link to="/">Home</Link>
						</li>
						<li>
								<Link to="/users">Users</Link>
						</li>
				</ul>
				<Outlet />
		</div>
}

export default Layout;
