/**
 * Created By Nguyen Cong Thanh on 30/10/2019 15:02.
 *
 * Copyright Intelin 2019.
 */

'use strict'

import React from 'react'

function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
