

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark,faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import './styles/noticeboard.css'

function Noticeboard(prop){
    const {title,content} = prop

    const [showInfo,setSetInfo] = useState(false)


    function toggleInfo(){
        setSetInfo(info=>!info)
        console.log('im clicked')
    }

    return (
        <section className="noticeboard" >
            <div className="noticeboard-title">
                 Notice Board
                <button className="noticeboard-toggle-btn" onClick={toggleInfo}>
                    <FontAwesomeIcon icon={showInfo?faCircleXmark:faCirclePlus} size='2x' />
                </button>
            </div>

            {showInfo && <div className="noticeboard-container">Hello</div>}
        </section>
    )
}
export default Noticeboard












