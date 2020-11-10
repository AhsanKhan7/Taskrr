import React, { useState } from 'react'
import TaskModal from '../TaskModal/TaskModal'
import styles from './Card.module.scss'
import dots from '../../assets/dots.png'
import edite from '../../assets/edite.png'
import delet from '../../assets/delet.png'

import Draggable from 'react-draggable';


function Card ({ item, task, description, deleteCard, id, addtask }) {


    const [tasks, setTasks] = useState([])

    const [taskName, setTaskName] = useState(item)

    const [edit, setEdit] = useState(false)

    const handleChange = e => {
        setTaskName( [e.target.name] = e.target.value )
    }

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [show, setShow] = useState(false)

    const update = () => {
        setTasks([...tasks, { name: title, description: content, id: Math.random() }])
        setShow(false)
        setTitle()
        setContent()
    }

    const close = () => {
        setShow(true)
    }

    const toggle = () => setShow(false);

    return (
        <div style={{ display: 'inline-flex'}}>
            
            <div className={styles.container}>

                <div className={styles.div} >
                    <div className={styles.imageContainer} >
                        <img style={{ marginRight:'-8px' }} src={dots} />
                        <img  src={dots} />
                    </div>
                    <div className={styles.text}>
                        
                        <input 
                            type="text" 
                            onChange={handleChange}
                            value={taskName}
                            name="taskName"
                            disabled={ edit ? false : true }
                        /> 
                        
                    </div>
                    <div className={styles.editstyle} >
                        {
                            edit
                            ?
                            <div onClick={() => setEdit(false)} ><img src={edite} /></div>
                            :
                            <div onClick={() => setEdit(true)}><img src={edite} /></div>
                        }
                    </div>
                    <button 
                        onClick={() => deleteCard(id)} 
                        className={styles.deletestyle}>
                        <img src={delet} />
                    </button>
                </div>
                <div> 

                    <div className={styles.div2} >
                        {
                        tasks.length !== 0
                        ?
                        tasks.map(task => (
                            <Draggable>     
                                <div>
                                    <div className={styles.imageContainer} >
                                        <img src={dots} />
                                        <img src={dots} />
                                    </div>
                                    <div  className={styles.text2} >                               
                                        <h4>{task.name}</h4>
                                        <p>{task.description}</p>
                                    </div>
                                </div>
                            </Draggable>
                            ))
                        :
                        <p className={styles.caution}>No tasks here!</p>
                        }
                    </div>

                   <div className={styles.bottomButton}><button onClick={close}>+ task</button></div>
                </div>
            </div>
            
            {
                show ?
                <TaskModal
                    setShow={setShow} 
                    toggle={toggle} 
                    title={title} 
                    content={content} 
                    setTitle={setTitle} 
                    setContent={setContent} 
                    update={update}
                />
                : null
            }
       

        </div>
    )
}

export default Card
