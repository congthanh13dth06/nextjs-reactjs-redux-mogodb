/**
 * Created By Nguyen Cong Thanh on 29/10/2019 14:05.
 *
 * Copyright Intelin 2019.
 */

import React from 'react'
import { Button, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
}))


const ButtonComponent = props => {

  const classes = useStyles()

  const { onClick } = props

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={onClick}
    >
      {props.text}
    </Button>
  )

}

export default ButtonComponent
