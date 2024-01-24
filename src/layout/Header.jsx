import React, { Component } from 'react'
import './Nav.css';

export class Header extends Component {
  render() {
    return (
        <div className='Head'>
            <div className='logo'>
                <a href={`/`}>ES</a>
            </div>
                <ul className='menus'>
                    <li className="menu">
                        <a href={`/`}>
                            Home
                        </a>
                    </li>
                    <li className="menu">
                        <a href={`/skill`}>
                            Skill
                        </a>
                    </li>
                    <li className="menu">
                        <a href={`/project`}>
                            Project
                        </a>
                    </li>
                    <li className="menu">
                        <a href={`https://github.com/eunseongzzangzzangman`}>
                            Github
                        </a>
                    </li>
                </ul>
        </div>
        
    )
  }
}

export default Header