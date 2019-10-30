/**
 * Created By Nguyen Cong Thanh on 30/10/2019 15:02.
 *
 * Copyright Intelin 2019.
 */

'use strict'

const FooterComponent = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Header</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">WooNext <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">My Account</a>
					</li>
				</ul>
			</div>
		</nav>
	)
};

export default FooterComponent;
