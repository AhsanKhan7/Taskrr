import React from 'react'
import styles from './Add.module.scss'

function Add({ addColumn }) {

    return (
        
            <div className={styles.addColumn}>
                <button onClick={addColumn}>+ Add a new column</button>
            </div>            
        
    )
}

export default Add
