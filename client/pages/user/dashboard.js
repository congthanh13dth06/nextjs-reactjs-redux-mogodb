'use strict'

import Link from 'next/link'

const UserComponent = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link href="/"><a className="nav-link">Home</a></Link>
					</li>
					<li className="nav-item">
						<Link href="/public/login"><a className="nav-link">Login</a></Link>
					</li>
				</ul>
			</div>
		</nav>
	)
};

export default UserComponent;
