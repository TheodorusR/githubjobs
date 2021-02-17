import React, { useContext } from 'react';
import github from '../img/github.png';
import {ButtonToggle} from 'reactstrap';
import { ThemeContext } from './ThemeState';

const Header = ({appDarkMode, setAppDarkMode}) => {
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  return (
    <div className='d-flex align-items-center'>
      <img src={github} style={{filter: darkMode ? 'invert(1)' : ''}} alt='github logo' className='mr-2' height='35px'/>
      <h1>Github Jobs</h1>
      <ButtonToggle 
        size='sm'
        className='ml-4'
        color={darkMode ? 'info' : 'secondary'} 
        onClick={() => {
          setDarkMode(!darkMode)
          setAppDarkMode(!appDarkMode)
        }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </ButtonToggle>
    </div>
  )
}

export default Header
