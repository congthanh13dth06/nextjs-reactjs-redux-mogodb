'use strict'

import Link from 'next/link'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

const HeaderComponent = (props) => {

	const { classes } = props

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link href="/public/login"><a className="nav-link">Login</a></Link>
						<Button variant="contained" color="primary" className={classes.root}>
				      Hello World
				    </Button>
					</li>
					<li className="nav-item">
						<Link href="/user/dashboard"><a className="nav-link">Dashboard</a></Link>
					</li>
				</ul>
			</div>
		</nav>
	)
};

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderComponent);
