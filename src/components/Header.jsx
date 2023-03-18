


import React from 'react'


import './styles/header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faScrewdriverWrench, faBell, faHome, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header>
        <img src='https://sdlms.deepthought.education/assets/uploads/files/system/site-logo.svg' alt="logo" className='logo' />
          <div>
              <button className="circle-btn">
                <FontAwesomeIcon icon={faHome} />
              </button>

              <button className="circle-btn">
                <FontAwesomeIcon icon={faScrewdriverWrench} />
              </button>

              <button className="circle-btn">
                <FontAwesomeIcon icon={faBell} />
              </button>

              <button className="circle-btn" style={{
                backgroundColor: 'inherit', color: 'inherit'
                , margin: 0
              }}>
                <FontAwesomeIcon icon={faEllipsisVertical} size="xl" />
              </button>
          </div>
    </header>
  )
}










