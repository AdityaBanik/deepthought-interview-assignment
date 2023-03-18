
import './styles/asset.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function Asset(prop){
    const {title,description,content,type} = prop

    const [showInfo,setSetInfo] = useState(true)

    let contents =''
    if(type === 'video'){
        console.log('in here')
            contents = <iframe width="100%" height="315" src={content} title="YouTube video player"  ></iframe>
    }
    else{
        contents = <div className="container">
            {content}
        </div>
    }

    function toggleInfo(){
        setSetInfo(info=>!info)
    }

    return (
        <section className="asset">
            <div className="asset-title">
                <h4>{title}</h4>
                <button className="asset-toggle-btn" onClick={toggleInfo}>
                    <FontAwesomeIcon icon={faCircleInfo} size="xl" />
                </button>
            </div>

            <div className="asset-description" style={showInfo ? {display: 'block'} : {display: 'none'}}>
                <p><strong>Description: </strong>{description}</p>
            </div>

            <div className="asset-container">
                {content !== ' ' ? contents : <p className='container'>prop.content is empty</p>}
                
            </div>
        </section>
    )
}
export default Asset












