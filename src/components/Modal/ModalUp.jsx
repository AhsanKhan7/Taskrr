import React from 'react'
import styles from './ModalUp.module.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalUp({ setInput, setvalue, toggle, value, handleClick }) {
    return (
        <div>
            <Modal isOpen={setInput} toggle={toggle}>
          <ModalHeader className={styles.modalHeader} toggle={toggle}>
            Add a new column
          </ModalHeader>
          <ModalBody className={styles.modalBody}>
            <div>
              <input
                className={styles.input}
                placeholder="Title"
                type="text"
                onChange={(e) => setvalue(e.target.value)}
                value={value}
              />
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                repellendus.
              </p>
            </div>
          </ModalBody>
          <ModalFooter className={styles.modalBottom}>
            <Button
              color="danger"
              style={{ borderRadius: "10px" }}
              onClick={toggle}
            >
              Cancel
            </Button>
            <Button color="link" onClick={handleClick}  
              disabled={ value ? false : true} >
              <span className={styles.bottomButton}>Add Column</span>
            </Button>
          </ModalFooter>
        </Modal>
        </div>
    )
}

export default ModalUp
