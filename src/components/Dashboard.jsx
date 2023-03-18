

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight,faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './styles/dashboard.css'

function Dashboard(props){

    const [showInfo,setSetInfo] = useState(false)

    const linksArray = props.data.map(item=>{
        const assets = item.assets.map(asset => <li key={asset.asset_id}>{asset.asset_title}</li>)
        return(
           
            <li>
                <strong>
                    <a href="#"key={item.task_id}>{item.task_title}</a>
                </strong>
                <ul>
                    {assets}
                </ul>
            </li> 
           
        )
    })
    const boxes = linksArray.map(
        (item,index) => <div className="box container" key={index + 'xxx'}>{index+1}</div>
    )
    
    function toggleInfo(){
        setSetInfo(info=>!info)
        console.log('im clicked')
    }

    return (
        <aside className="dashboard" style={showInfo?{}:{width: '7em'}}>
            <div className="dashboard-title">
                {showInfo && <h4>Journey Board</h4>}
                <button className="dashboard-toggle-btn" onClick={toggleInfo}>
                    <FontAwesomeIcon icon={showInfo?faCircleArrowLeft:faCircleArrowRight} size='2x' />
                </button>
            </div>

            <div className="dashboard-container container">
                {showInfo?linksArray:boxes}
            </div>
        </aside>
    )
}
export default Dashboard












