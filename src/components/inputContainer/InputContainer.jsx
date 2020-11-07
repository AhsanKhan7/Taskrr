import React from 'react'
import styles from './InputContainer.module.scss'
import dots from '../../assets/dots.png'
import edit from '../../assets/edit.png'
import delet from '../../assets/delet.png'
import Add from '../Add/Add'

const todos = [
    'name', 'Ahsan',

]

function inputContainer() {
    const HandleClick = () => {

    }

    return (
        <div style={{ display: 'inline-flex'}}>
            { todos.map((item) => { 
            
            <div className={styles.container}>
                <div className={styles.div} >
                    <div className={styles.imageContainer} >
                        <img style={{ marginRight:'-12px' }} src={dots} />
                        <img  src={dots} />
                    </div>

                    <div className={styles.text}><h4>{item}</h4></div>
                    <div className={styles.editstyle} ><img src={edit} /></div>
                    <div className={styles.deletestyle}><img src={delet} /></div>
                </div>

                <div className={styles.div2} >
                    <div className={styles.imageContainer} >
                        <img style={{ marginRight:'-12px' }} src={dots} />
                        <img  src={dots} />
                    </div>
                    <div className={styles.text}><h4>Task 1</h4><p>description</p></div>
                </div>
                <div className={styles.bottomButton}><button>+ Task</button></div>
            </div> 
        })}

            <Add HandleClick={HandleClick} />
        </div>
    )
}

export default inputContainer
