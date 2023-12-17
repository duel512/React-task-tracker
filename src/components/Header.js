import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClickFunction={onAdd}/>
    </header>
   
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.protoType = {
    title: PropTypes.string.isRequired,
    toggleShowAdd: PropTypes.func.isRequired,
}

export default Header