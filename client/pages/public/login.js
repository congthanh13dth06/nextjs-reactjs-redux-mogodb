'use strict'

import Link from 'next/link'

import PublicComponent from '../../components/public/public.component'
import LoginComponent from '../../components/public/login/login.container'

const RoutePublicLoginComponent = () => {

	return (
		<PublicComponent>
			<LoginComponent />
		</PublicComponent>
	)

};

export default RoutePublicLoginComponent;
