import Asset from "./Asset"
import Dashboard from "./Dashboard"
import Header from "./Header"
import Noticeboard from "./Noticeboard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

import data from '../ddugky_project.json'
function App(){
    
    const tasksArray = data.tasks.map(item=>{
        const assets = item.assets.map(asset =>   
        <Asset 
            title={asset.asset_title}
            key={asset.asset_id}
            description={asset.asset_description}
            content = {asset.asset_content}
            type = {asset.asset_content_type}
        />)
        return(
            <section className="task" key={item.task_id}>
                <section className="task-description container" >
                    <h3>{item.task_title}</h3>
                    <p>{item.task_description}</p>
                </section>

                <section className="assets container">
                    {assets}
                </section>
            </section>
        )
    })
  

    return (
       
        <>
            <Header />
            <section className="project container">
                <h1>{data.title}</h1>
                
            </section>
            
            <main >
                {tasksArray}
            </main>
            
            <Dashboard data={data.tasks}/>
            <Noticeboard/>
            
            <div className="action-btn-container">
                <button className="circle-btn action-btn">
                    <FontAwesomeIcon icon={faQuestion} size="xl" />
                </button>
                <button className="circle-btn action-btn">
                    <FontAwesomeIcon icon={faPeopleGroup} size="xl" />
                </button>
                <button className="circle-btn action-btn">
                    <FontAwesomeIcon icon={faCalendarAlt} size="xl" />
                </button>
            </div>
        </>
    
    )
}

export default App






