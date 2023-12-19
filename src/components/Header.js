import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClickFunction={onAdd}/>
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