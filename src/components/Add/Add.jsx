import React from 'react'

function Add({ HandleClick }) {

    return (
        
            <div >
                <button onCLick={HandleClick}>+ Add a new column</button>
            </div>            
        
    )
}

export default Add
// className={styles.addColumn}