/**
 * Created By Nguyen Cong Thanh on 30/10/2019 15:02.
 *
 * Copyright Intelin 2019.
 */

'use strict'

import Link from 'next/link'

const DashboardPage = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link href="/"><a className="nav-link">Home</a></Link>
					</li>
					<li className="nav-item">
						<Link href="/login"><a className="nav-link">Login</a></Link>
					</li>
				</ul>
			</div>
		</nav>
	)
};

export default DashboardPage;
